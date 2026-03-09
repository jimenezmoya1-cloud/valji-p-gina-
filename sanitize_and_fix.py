import os
import re
import unicodedata
import shutil

def sanitize_name(name):
    name = name.lower()
    name = "".join(c for c in unicodedata.normalize('NFD', name) if unicodedata.category(c) != 'Mn')
    name = re.sub(r'[^a-z0-9.-]', '-', name)
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')
    return name

base_dir = os.getcwd()
img_root = os.path.join(base_dir, 'assets', 'img')

# 1. Collect all paths from code
paths_in_code = []
for filename in ['index.html', 'style.css', 'app.js']:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            matches = re.findall(r'(\.\./modificados/[^"\')\s]+|productos/[^"\')\s]+|logo/[^"\')\s]+)', content)
            paths_in_code.extend(matches)

paths_in_code = list(set(paths_in_code))
print(f"Found {len(paths_in_code)} potential paths in code.")

# 2. Rename everything in assets/img to something unique and safe first
# We do this in two passes to avoid case-sensitivity issues during renames
rename_map = {} # old_rel -> new_rel

# First pass: Rename files/dirs
for root, dirs, files in os.walk(img_root, topdown=False):
    for f in files:
        if f == ".DS_Store":
            os.remove(os.path.join(root, f))
            continue
        old_path = os.path.join(root, f)
        rel_to_img = os.path.relpath(old_path, img_root)
        new_name = sanitize_name(f)
        
        # We'll build the final path later. For now just move and sanitize name.
        # To avoid case move issues, move to a temp name
        temp_path = os.path.join(root, "TEMP_" + f)
        os.rename(old_path, temp_path)
        
        final_path = os.path.join(root, new_name)
        if os.path.exists(final_path) and final_path != temp_path:
             # If it exists (collision), add counter
             base, ext = os.path.splitext(new_name)
             c = 1
             while os.path.exists(os.path.join(root, f"{base}-{c}{ext}")):
                 c += 1
             final_path = os.path.join(root, f"{base}-{c}{ext}")
        
        os.rename(temp_path, final_path)

    for d in dirs:
        old_path = os.path.join(root, d)
        new_name = sanitize_name(d)
        temp_path = os.path.join(root, "TEMPDIR_" + d)
        os.rename(old_path, temp_path)
        final_path = os.path.join(root, new_name)
        
        if os.path.exists(final_path):
            # Merge contents
            for item in os.listdir(temp_path):
                shutil.move(os.path.join(temp_path, item), os.path.join(final_path, item))
            os.rmdir(temp_path)
        else:
            os.rename(temp_path, final_path)

# 3. Build a fresh list of ALL files in assets/img
all_files = []
for root, dirs, files in os.walk(img_root):
    for f in files:
        rel = os.path.relpath(os.path.join(root, f), base_dir)
        all_files.append(rel)

# 4. Create mapping from code-path to new physical path
final_replacements = {}

for p in paths_in_code:
    # Normalize path from code to what we expect it to be in assets/img
    # ../modificados/A/B -> A/B
    # productos/X/Y -> productos/X/Y
    # logo/Z -> logo/Z
    
    clean_p = p.replace('../modificados/', '')
    # Ensure it doesn't lead with /
    clean_p = clean_p.lstrip('/')
    
    # Target in assets/img
    parts = clean_p.split('/')
    sanitized_parts = [sanitize_name(part) for part in parts]
    
    # Attempt to find the file
    target_rel = "assets/img/" + "/".join(sanitized_parts)
    
    if target_rel in all_files:
        final_replacements[p] = target_rel
    else:
        # Fuzzy match
        for f in all_files:
            if f.lower() == target_rel.lower():
                final_replacements[p] = f
                break

# 5. Apply
for filename in ['index.html', 'style.css', 'app.js']:
    if not os.path.exists(filename): continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    sorted_reps = sorted(final_replacements.items(), key=lambda x: len(x[0]), reverse=True)
    count = 0
    for old, new in sorted_reps:
        if old in new_content:
            new_content = new_content.replace(old, new)
            count += 1
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filename}: {count} replacements.")

# Cleanup outside folders
for folder in ['productos', 'logo']:
    if os.path.exists(folder):
        shutil.rmtree(folder)

print("Repositorio sanitizado y listo para Vercel.")
