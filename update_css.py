import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update .hero-content
target_hero_content = ".hero-content { position: relative; z-index: 2; max-width: 820px; }"
new_hero_content = """.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  text-align: left;
}
.hero-text-content {
  flex: 1;
  max-width: 600px;
}
.hero-image-content {
  flex: 1;
}"""
if target_hero_content in css:
    css = css.replace(target_hero_content, new_hero_content)
else:
    print("Could not find .hero-content")

# 2. Update .hero-main-img
target_hero_main_img = """.hero-main-img {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 1.5rem;
  display: block;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}"""
new_hero_main_img = """.hero-main-img {
  width: 100%;
  max-width: 600px;
  margin: 0;
  display: block;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}"""
if target_hero_main_img in css:
    css = css.replace(target_hero_main_img, new_hero_main_img)
else:
    print("Could not find .hero-main-img")

# 3. Update .hero-title
target_hero_title = """.hero-title {
  font-family: var(--font);
  font-size: clamp(3.2rem, 9vw, 6.5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
}"""
new_hero_title = """.hero-title {
  font-family: var(--font);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
}"""
if target_hero_title in css:
    css = css.replace(target_hero_title, new_hero_title)
else:
    print("Could not find .hero-title")

# 4. Update .hero-subtitle
target_hero_subtitle = """.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--text-muted);
  margin-bottom: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}"""
new_hero_subtitle = """.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  max-width: 100%;
}"""
if target_hero_subtitle in css:
    css = css.replace(target_hero_subtitle, new_hero_subtitle)
else:
    print("Could not find .hero-subtitle")

# 5. Update .hero-ctas
target_hero_ctas = ".hero-ctas { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }"
new_hero_ctas = ".hero-ctas { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }"
if target_hero_ctas in css:
    css = css.replace(target_hero_ctas, new_hero_ctas)
else:
    print("Could not find .hero-ctas")

# 6. Add "About Features" CSS to replace quote and text
target_quote = """.about-quote {
  border-left: 4px solid var(--accent);
  padding-left: 1rem;
  font-size: 1.15rem;
  font-style: italic;
  color: var(--accent);
  margin: 1.5rem 0 2rem;
}"""
new_quote = """
.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}
.about-feature {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
  transition: transform var(--transition), box-shadow var(--transition);
}
.about-feature:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.about-feature-icon {
  font-size: 2rem;
  line-height: 1;
}
.about-feature strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  color: var(--text);
}
.about-feature p {
  font-size: 1.05rem;
  margin: 0;
  color: var(--text-muted);
}
"""
if target_quote in css:
    css = css.replace(target_quote, new_quote)
else:
    print("Could not find .about-quote")


# Append media query fix for mobile hero
css += """
@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .hero-text-content {
    max-width: 100%;
  }
  .hero-ctas {
    justify-content: center;
  }
  .hero-title {
    font-size: clamp(2.2rem, 8vw, 3rem);
  }
}
"""

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated style.css")
