import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Hero section
hero_target = """    <div class="hero-content">
      <div class="hero-badge">🇨🇷 Distribuidora 100% Costarricense · Desde 1997</div>
      <img src="../modificados/main/Facebook Image.jpg" alt="Valji Nutrición" class="hero-main-img" />
      <h1 class="hero-title">Rinde al <span class="gradient-text">máximo</span><br />con la nutrición<br /><span
          class="gradient-text">que mereces</span></h1>
      <p class="hero-subtitle">PowerBar · Muscle Milk · Oikos | Para triatlonistas, ciclistas, corredores y deportistas
        que no conocen límites.</p>
      <div class="hero-free-shipping">🚚 Envío GRATIS a nivel nacional en todos tus pedidos</div>
      <div class="hero-ctas">
        <a href="#productos" class="btn-primary">Ver Catálogo</a>
        <a href="https://wa.me/50686724000?text=Hola%20Valji%2C%20quiero%20conocer%20sus%20productos%20y%20precios."
          target="_blank" class="btn-outline-hero" id="hero-wa-btn">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M23.5 8.5C21.7 6.7 19.3 5.7 16.7 5.7C11.3 5.7 6.9 10.1 6.9 15.5C6.9 17.3 7.4 19 8.2 20.5L6.8 25.5L11.9 24.1C13.4 24.9 15 25.3 16.7 25.3C22.1 25.3 26.5 20.9 26.5 15.5C26.5 12.9 25.3 10.3 23.5 8.5ZM16.7 23.7C15.2 23.7 13.6 23.3 12.3 22.5L11.9 22.3L8.9 23.1L9.7 20.2L9.5 19.8C8.6 18.4 8.2 16.9 8.2 15.5C8.2 10.9 11.9 7.1 16.7 7.1C19 7.1 21.1 8 22.7 9.6C24.3 11.2 25.2 13.3 25.2 15.5C25.2 20.1 21.4 23.7 16.7 23.7ZM21.4 17.7C21.1 17.5 19.6 16.8 19.4 16.7C19.1 16.6 19 16.5 18.8 16.8C18.7 17.1 18.1 17.7 17.9 17.9C17.8 18.1 17.6 18.1 17.4 18C15.8 17.2 14.8 16.6 13.7 14.8C13.4 14.3 14 14.3 14.5 13.3C14.6 13.1 14.5 12.9 14.5 12.8C14.4 12.6 13.8 11.1 13.6 10.5C13.3 9.9 13.1 10 12.9 10C12.7 10 12.6 10 12.4 10C12.2 10 11.9 10.1 11.6 10.4C11.4 10.7 10.6 11.4 10.6 12.9C10.6 14.4 11.6 15.8 11.8 16.1C12 16.3 13.8 19 16.4 19.9C18.1 20.5 18.8 20.6 19.7 20.4C20.3 20.3 21.4 19.7 21.7 19C21.9 18.3 21.9 17.7 21.7 17.7H21.4Z"
              fill="white" />
          </svg>
          Consultar ahora
        </a>
      </div>
    </div>"""

hero_new = """    <div class="hero-content">
      <div class="hero-text-content fade-in-left">
        <div class="hero-badge">🇨🇷 Distribuidora 100% Costarricense · Desde 1997</div>
        <h1 class="hero-title">Rinde al <span class="gradient-text">máximo</span><br />con la nutrición<br /><span
            class="gradient-text">que mereces</span></h1>
        <p class="hero-subtitle">PowerBar · Muscle Milk · Oikos | Para triatlonistas, ciclistas, corredores y deportistas
          que no conocen límites.</p>
        <div class="hero-free-shipping">🚚 Envío GRATIS a nivel nacional en todos tus pedidos</div>
        <div class="hero-ctas">
          <a href="#productos" class="btn-primary">Ver Catálogo</a>
          <a href="https://wa.me/50686724000?text=Hola%20Valji%2C%20quiero%20conocer%20sus%20productos%20y%20precios."
            target="_blank" class="btn-outline-hero" id="hero-wa-btn">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <path
                d="M23.5 8.5C21.7 6.7 19.3 5.7 16.7 5.7C11.3 5.7 6.9 10.1 6.9 15.5C6.9 17.3 7.4 19 8.2 20.5L6.8 25.5L11.9 24.1C13.4 24.9 15 25.3 16.7 25.3C22.1 25.3 26.5 20.9 26.5 15.5C26.5 12.9 25.3 10.3 23.5 8.5ZM16.7 23.7C15.2 23.7 13.6 23.3 12.3 22.5L11.9 22.3L8.9 23.1L9.7 20.2L9.5 19.8C8.6 18.4 8.2 16.9 8.2 15.5C8.2 10.9 11.9 7.1 16.7 7.1C19 7.1 21.1 8 22.7 9.6C24.3 11.2 25.2 13.3 25.2 15.5C25.2 20.1 21.4 23.7 16.7 23.7ZM21.4 17.7C21.1 17.5 19.6 16.8 19.4 16.7C19.1 16.6 19 16.5 18.8 16.8C18.7 17.1 18.1 17.7 17.9 17.9C17.8 18.1 17.6 18.1 17.4 18C15.8 17.2 14.8 16.6 13.7 14.8C13.4 14.3 14 14.3 14.5 13.3C14.6 13.1 14.5 12.9 14.5 12.8C14.4 12.6 13.8 11.1 13.6 10.5C13.3 9.9 13.1 10 12.9 10C12.7 10 12.6 10 12.4 10C12.2 10 11.9 10.1 11.6 10.4C11.4 10.7 10.6 11.4 10.6 12.9C10.6 14.4 11.6 15.8 11.8 16.1C12 16.3 13.8 19 16.4 19.9C18.1 20.5 18.8 20.6 19.7 20.4C20.3 20.3 21.4 19.7 21.7 19C21.9 18.3 21.9 17.7 21.7 17.7H21.4Z"
                fill="white" />
            </svg>
            Consultar ahora
          </a>
        </div>
      </div>
      <div class="hero-image-content fade-in">
        <img src="../modificados/main/Facebook Image.jpg" alt="Valji Nutrición" class="hero-main-img" />
      </div>
    </div>"""

if hero_target in html:
    html = html.replace(hero_target, hero_new)
else:
    print("Could not find hero target")

# 2. Update About section
about_target = """        <p>Distribuidora Valji S.A. es una PYME 100% costarricense fundada en 1997 con un propósito claro: traer al país
          los productos de nutrición deportiva más innovadores y líderes a nivel mundial, para que los costarricenses
          tengan acceso a lo mejor que el mercado global tiene para ofrecer.</p>
        <p>Entendemos que cada atleta es único. Por eso, más allá de vender suplementos, buscamos ser el aliado
          estratégico de triatlonistas, ciclistas, corredores, y de todos aquellos que eligen un estilo de vida activo y
          saludable.</p>
        <p>Somos una empresa responsable: cumplimos con todas las regulaciones sanitarias, no comercializamos ningún
          producto que pueda poner en riesgo la salud de nuestros clientes y apoyamos activamente el medio ambiente
          mediante el uso de <strong>paneles solares</strong> en nuestra oficina.</p>
        <p><strong>Nuestra visión:</strong> ser la referencia nacional en calidad, innovación y excelencia en nutrición
          deportiva.</p>
        <blockquote class="about-quote">"Con Valji recibís calidad, seriedad, responsabilidad y la garantía de tener lo
          mejor del mercado en tus manos."</blockquote>"""

about_new = """        <div class="about-features">
          <div class="about-feature fade-in" style="animation-delay: 0.1s;">
            <span class="about-feature-icon">🏅</span>
            <div>
              <strong>Líderes desde 1997</strong>
              <p>Traemos a Costa Rica la mejor nutrición deportiva a nivel mundial.</p>
            </div>
          </div>
          <div class="about-feature fade-in" style="animation-delay: 0.2s;">
            <span class="about-feature-icon">🚴</span>
            <div>
              <strong>Tu aliado estratégico</strong>
              <p>Acompañamos a triatlonistas, ciclistas y corredores a lograr sus metas de manera profesional.</p>
            </div>
          </div>
          <div class="about-feature fade-in" style="animation-delay: 0.3s;">
            <span class="about-feature-icon">✅</span>
            <div>
              <strong>Calidad y Seguridad</strong>
              <p>Valji cumple con estrictas regulaciones para cuidar tu salud y garantizar excelencia en nutrición y rendimiento.</p>
            </div>
          </div>
        </div>"""

if about_target in html:
    html = html.replace(about_target, about_new)
else:
    print("Could not find about target")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated text in HTML")
