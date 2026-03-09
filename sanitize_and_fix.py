import os
import re
import unicodedata
import shutil

def sanitize_name(name):
    # Convert to lowercase
    name = name.lower()
    # Remove accents
    name = "".join(c for c in unicodedata.normalize('NFD', name) if unicodedata.category(c) != 'Mn')
    # Replace anything not a-z, 0-9, dot, or hyphen with hyphen
    name = re.sub(r'[^a-z0-9.-]', '-', name)
    # Remove double hyphens
    name = re.sub(r'-+', '-', name)
    # Trim hyphens from starts/ends
    name = name.strip('-')
    return name

base_dir = os.getcwd()
img_root = os.path.join(base_dir, 'assets', 'img')

# Build a map of ALL files in assets/img with their "sanitized signature"
# signature -> actual_sanitized_rel_path
physical_files = {}
for root, dirs, files in os.walk(img_root):
    for f in files:
        rel = os.path.relpath(os.path.join(root, f), base_dir)
        # Signature is the sanitized version of the path relative to assets/img
        parts = rel.replace('assets/img/', '').split('/')
        sig = '/'.join([sanitize_name(p) for p in parts])
        physical_files[sig] = rel

print(f"Indexado {len(physical_files)} archivos físicos.")

# Files to update
targets = ['index.html', 'style.css', 'app.js']

for filename in targets:
    if not os.path.exists(filename): continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find anything that looks like an image path we care about
    # Matches strings starting with ../modificados/, productos/, or logo/ inside quotes or url()
    pattern = r'(\.\./modificados/|productos/|logo/)([^"\')\n]+)'
    count = 0
    
    def replacer(match):
        prefix = match.group(1)
        path_remainder = match.group(2).strip()
        
        # Build signature
        parts = path_remainder.split('/')
        sig = '/'.join([sanitize_name(p) for p in parts])
        
        # If it's productos/ or logo/, we need to include that in sig prefix if physical_files sig includes it
        # Actually physical_files sig is relative to assets/img/
        # so for productos/X -> productos/x
        
        if prefix == 'productos/':
             full_sig = 'productos/' + sig
        elif prefix == 'logo/':
             full_sig = 'logo/' + sig
        else: # ../modificados/
             full_sig = sig
        
        if full_sig in physical_files:
            return physical_files[full_sig]
        else:
            # Try fuzzy without extension if it fails?
            # Or just return original if not found
            # print(f"Not found: {full_sig}")
            return match.group(0)

    new_content = re.sub(pattern, replacer, content)
    
    # Second pass for hardcoded logo paths that don't match pattern exactly if any
    # (Simplified)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # Verify count roughly by diff
    if new_content != content:
        print(f"Updated {filename}")
    else:
        print(f"No changes in {filename}")

print("Sanitization applied to code.")
