import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Update :root
root_light = """:root {
  --bg-0: #f8fafc;
  --bg-1: #ffffff;
  --bg-2: #f1f5f9;
  --bg-card: #ffffff;
  --bg-card-hover: #ffffff;
  --border: rgba(0,0,0,0.08);
  --border-glow: rgba(0,196,255,0.2);
  --accent: #0070f3;
  --accent-2: #0051cc;
  --accent-3: #0f8e4e;
  --gold: #f5c518;
  --wa-green: #25D366;
  --text: #0f172a;
  --text-muted: #64748b;
  --text-dim: #94a3b8;
  --radius: 16px;
  --radius-lg: 24px;
  --shadow: 0 10px 30px rgba(0,0,0,0.05);
  --shadow-card: 0 4px 20px rgba(0,0,0,0.04);
  --transition: 0.3s ease;
  --font: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}"""
css = re.sub(r':root\s*\{[^}]+\}', root_light, css)

# 2. Fix specific rgba values that assumed dark mode
css = css.replace('rgba(255,255,255,0.07)', 'rgba(0,0,0,0.04)')
css = css.replace('rgba(255,255,255,0.12)', 'rgba(0,0,0,0.08)')
css = css.replace('rgba(255,255,255,0.08)', 'rgba(0,0,0,0.05)')
css = css.replace('rgba(255,255,255,0.15)', 'rgba(0,0,0,0.1)')
css = css.replace('rgba(255,255,255,0.3)', 'rgba(0,0,0,0.15)')
css = css.replace('border: 2px solid rgba(255,255,255,0.2);', 'border: 2px solid var(--accent); color: var(--accent);')
css = css.replace('color: #fff;\n  font-family: var(--font);\n  font-weight: 600;', 'font-family: var(--font);\n  font-weight: 600;')

# Navbar
css = css.replace('background: rgba(5,11,20,0.95);', 'background: rgba(255,255,255,0.95);')
css = css.replace('box-shadow: 0 2px 20px rgba(0,0,0,0.5);', 'box-shadow: 0 2px 20px rgba(0,0,0,0.05);')
css = css.replace('background: #111;', 'background: var(--bg-2);')
css = css.replace('background: rgba(0,0,0,0.65);', 'background: rgba(255,255,255,0.9);')
css = css.replace('background: rgba(0,0,0,0.85);', 'background: rgba(0,0,0,0.5);')
css = css.replace('background: rgba(0,0,0,0.7);', 'background: rgba(0,0,0,0.5);')

# Shadow tweaks
css = css.replace('box-shadow: -12px 0 48px rgba(0,0,0,0.6);', 'box-shadow: -12px 0 48px rgba(0,0,0,0.15);')

# 3. Add .gallery-section CSS and fade-in animations
gallery_css = """

/* ── GALERÍA ──────────────────────────────────────────────── */
.gallery-section {
  padding: 4rem 1.5rem;
  max-width: 1320px;
  margin: 0 auto;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.gallery-item {
  position: relative;
  aspect-ratio: 1; /* Square */
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform var(--transition), box-shadow var(--transition);
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up 0.8s forwards;
}
.gallery-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  z-index: 2;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.gallery-item:hover img {
  transform: scale(1.08); /* slight zoom inside */
}

/* Base animations for more dynamic feel */
@keyframes fade-in-up {
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up 0.8s forwards;
}
"""

css += gallery_css

with open('style.css', 'w') as f:
    f.write(css)
print("Updated style.css")
