with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update logos
html = html.replace('src="logo/logo.jpg"', 'src="../modificados/nuevooo/Logotipo con fondo transparente.png"')
html = html.replace('src="../modificados/Logos/Valji Logo.png"', 'src="../modificados/nuevooo/Logotipo con fondo transparente.png"')
html = html.replace('src="../modificados/Logos/Pymes Costa Rica.png"', 'src="../modificados/nuevooo/Untitled Design 310x438.png"')
html = html.replace('src="../modificados/Logos/Carbono Neutral Costa Rica.jpg"', 'src="../modificados/nuevooo/Carbono Neutral Costa Rica.webp"')

# 2. Hero Image addition - Before the title
hero_main_img = '<img src="../modificados/main/Facebook Image.jpg" alt="Valji Nutrición" class="hero-main-img" />\n    <h1 class="hero-title">'
html = html.replace('<h1 class="hero-title">', hero_main_img)

# 3. Remove .gallery-section
import re
html = re.sub(r'<!-- ===== GALERÍA DINÁMICA ===== -->.*?</section>\n+', '', html, flags=re.DOTALL)

# 4. Remove about badges and replace with a distributed image
about_badges = """      <div class="about-badges">
        <img src="../modificados/nuevooo/Untitled Design 310x438.png" alt="PYME Costa Rica" class="badge-img" />
        <img src="../modificados/nuevooo/Carbono Neutral Costa Rica.webp" alt="Carbono Neutral" class="badge-img" />
      </div>"""
new_about_image = """      <div class="about-extra-img">
        <img src="../modificados/Nuevas/Facebook Image (1).jpg" alt="Atleta Valji" class="distributed-img" />
      </div>"""
html = html.replace(about_badges, new_about_image)

# 5. Distribute banner before shipping banner
banner_img = """<!-- ===== BANNER DISTRIBUIDO ===== -->
<section class="banner-section fade-in">
  <div class="banner-container">
    <img src="../modificados/Nuevas/Energy Bars Web Banner.webp" alt="Energy Bars" class="distributed-banner" />
  </div>
</section>\n\n"""
html = html.replace('<!-- ===== FREE SHIPPING BANNER ===== -->', banner_img + '<!-- ===== FREE SHIPPING BANNER ===== -->')

# 6. Distribute last image in contact section
contact_img = """      <div class="contact-extra-img fade-in">
        <img src="../modificados/Nuevas/Facebook Image (2).jpg" alt="Entrenamiento" class="distributed-img" />
      </div>\n    </div>\n  </div>\n</section>"""
html = html.replace('    </div>\n  </div>\n</section>', contact_img)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated text in HTML")
