/* ============================================================
   VALJI – APP.JS
   ============================================================ */

/* ── SVG ICONS (Lucide) ──────────────────────────────────── */
const ICON = {
  cart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  truck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  trophy: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  zap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 2 20 2s-3 5.5-5 11.2A7 7 0 0 1 11 20z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  medal: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>',
  bike: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  trash: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
  plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  globe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
};

/* ── PRODUCT DATA ─────────────────────────────────────────── */
const WHATSAPP = '50686724000';

const PRODUCTS = [
  /* =================== PROTEÍNAS =================== */
  {
    id: 'oikos-shake',
    name: 'Proteína Oikos Shake',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 2800,
    priceLabel: '₡2.800',
    priceUnit: 'por unidad',
    flavors: ['Chocolate', 'Vainilla'],
    images: [
      'assets/img/productos/proteina-oikos-shake/chocolate.webp',
      'assets/img/productos/proteina-oikos-shake/vainilla.webp',
    ],
    description: 'El Oikos Shake es una proteína ultraconveniente lista para consumir. Perfecta para después del entrenamiento o como snack de alta proteína en cualquier momento del día. Formulada para deportistas que buscan calidad y practicidad.',
    benefits: ['Alta en proteína', 'Lista para beber', 'Sin preparación', 'Recuperación rápida'],
  },
  {
    id: 'muscle-milk-shake',
    name: 'Proteína Muscle Milk Shake',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 2500,
    priceLabel: '₡2.500',
    priceUnit: 'por unidad',
    flavors: ['Chocolate'],
    images: [
      'assets/img/productos/proteina-muscle-milk-shake/chocolate.png',
    ],
    description: 'Muscle Milk Genuine es la proteína de alto rendimiento favorita de atletas profesionales. Con una mezcla avanzada de proteínas de acción rápida y lenta, te proporciona aminoácidos durante más tiempo para maximizar la síntesis muscular.',
    benefits: ['Proteína multi-fuente', 'Soporte muscular prolongado', 'Sin azúcares añadidos', 'Ideal post-workout'],
  },
  {
    id: 'hidratante-proteina-2en1',
    name: 'Hidratante y Proteína 2 en 1',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 2600,
    priceLabel: '₡2.600',
    priceUnit: 'por unidad',
    flavors: ['Fresa-Sandía', 'Mango-Naranja'],
    images: [
      'assets/img/hidratante-y-proteina-2-en-1/fresa-sandia.png',
      'assets/img/hidratante-y-proteina-2-en-1/mango-naranja.png',
    ],
    description: 'La solución perfecta para el deportista activo: combina la hidratación que necesitás con el aporte proteínico en un solo producto. Ideal para actividades como ciclismo, running y triatlón, donde la hidratación y la recuperación muscular son prioritarias.',
    benefits: ['Proteína + Hidratación', '2 en 1', 'Recuperación muscular', 'Repone electrolitos'],
  },
  {
    id: 'gainer-muscle-milk-5lbs',
    name: 'Gainer Muscle Milk 5 Lbs',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 48800,
    priceLabel: '₡48.800',
    priceUnit: 'por presentación',
    flavors: ['Chocolate', 'Vainilla Creme'],
    images: [
      'assets/img/gainer-muscle-milk-5-lbs/chocolate.png',
      'assets/img/gainer-muscle-milk-5-lbs/vainilla-creme-.png',
    ],
    description: 'El gainer premium de Muscle Milk combina carbohidratos complejos y proteínas de alta calidad para acelerar la ganancia de masa muscular. Ideal para atletas en etapa de volumen o quienes necesitan aumentar su ingesta calórica de forma saludable.',
    benefits: ['Aumento de masa', 'Alta en calorías', 'Carbohidratos complejos', 'Proteína de alta calidad'],
  },
  {
    id: 'proteina-mm-2lbs',
    name: 'Proteína Muscle Milk 2 Lbs',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 22700,
    priceLabel: '₡22.700',
    priceUnit: 'por presentación',
    flavors: ['Chocolate', 'Cookies & Creme', 'Fresa'],
    images: [
      'assets/img/proteina-muscle-milk-2-lbs/chocolate-copy.png',
      'assets/img/proteina-muscle-milk-2-lbs/cookies-n-creme.png',
      'assets/img/proteina-muscle-milk-2-lbs/fresa.png',
    ],
    description: 'Proteína premium Muscle Milk en presentación de 2 Lbs. Con su fórmula avanzada de proteínas lentas y rápidas, es perfecta para la recuperación y el crecimiento muscular. Ideal para triatlonistas, ciclistas y corredores de alta intensidad.',
    benefits: ['Proteína multi-fuente', 'Recuperación muscular', 'Sin azúcares añadidos', 'Soporte anabólico'],
  },
  {
    id: 'proteina-mm-5lbs',
    name: 'Proteína Muscle Milk 5 Lbs',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 57400,
    priceLabel: '₡57.400',
    priceUnit: 'por presentación',
    flavors: ['Chocolate'],
    images: [
      'assets/img/proteina-muscle-milk-5-lbs/chocolate.png',
    ],
    description: 'La presentación grande de Proteína Muscle Milk, perfecta para deportistas comprometidos con su rendimiento. Mayor rendimiento por precio y la misma calidad premium que caracteriza a la marca favorita de atletas de élite a nivel mundial.',
    benefits: ['Mejor rendimiento por precio', 'Alta proteína por porción', 'Recuperación óptima', 'Para atletas serios'],
  },
  {
    id: 'mm-cero-1.65lbs',
    name: 'Proteína Muscle Milk Cero 1.65 Lbs',
    category: 'proteinas',
    categoryLabel: 'Proteínas',
    price: 35900,
    priceLabel: '₡35.900',
    priceUnit: 'por presentación',
    flavors: ['Vainilla Creme'],
    images: [
      'assets/img/productos/proteina-muscle-milk-cero-1.65-lbs/vainilla-creme.png',
    ],
    description: 'Muscle Milk Zero es la opción ideal para quienes buscan maximizar la ingesta proteica sin agregar azúcares ni calorías extra. Con 0g de azúcar y una alta concentración de proteína por porción, es perfecta para deportistas en etapa de definición.',
    benefits: ['0g azúcar', 'Alta proteína', 'Baja en calorías', 'Ideal para definición'],
  },

  /* =================== POWERGEL =================== */
  {
    id: 'powergel-original',
    name: 'PowerGel Original 24U',
    category: 'geles',
    categoryLabel: 'PowerGel',
    price: 36465,
    priceLabel: '₡36.465',
    priceUnit: 'caja 24 unidades',
    flavors: ['Fresa-banano', 'Lima-Limón', 'Manzana verde (+Cafeína)', 'Vainilla'],
    images: [
      'assets/img/productos/powergel-original-24u/fresa-banano.webp',
      'assets/img/productos/powergel-original-24u/lima-limon.webp',
      'assets/img/productos/powergel-original-24u/manzana-verde-cafeina-.webp',
      'assets/img/productos/powergel-original-24u/vainilla.webp',
    ],
    description: 'El gel favorito de los deportistas profesionales desde 1996. Con proporción de hidratos de carbono 2:1 (glucosa + fructosa) y approx. 200mg de sodio por bolsita, mejora el rendimiento físico durante ejercicios de alta intensidad y larga duración. Apto para veganos. Certificado en la Cologne List®.',
    benefits: ['Proporción C2MAX 2:1', '~200mg sodio', 'Apto vegano', 'Cologne List®', 'Desde 1996'],
  },
  {
    id: 'fuel-30-gel',
    name: 'Fuel 30 Gel 12U',
    category: 'geles',
    categoryLabel: 'PowerGel',
    price: 31850,
    priceLabel: '₡31.850',
    priceUnit: 'caja 12 unidades',
    flavors: ['Limón'],
    images: [
      'assets/img/productos/fuel-30-gel-12u/limon.webp',
    ],
    description: 'El Fuel 30 Gel de PowerBar pertenece a la Black Line y contiene 30g de hidratos de carbono por bolsita en proporción 1:0,8 (glucosa:fructosa). Diseñado para uso antes y durante el esfuerzo deportivo intenso. Ideal para ciclistas y triatlonistas en competencia.',
    benefits: ['30g carbohidratos', 'Proporción 1:0.8', 'Black Line', 'Antes y durante'],
  },
  {
    id: 'powergel-hydro',
    name: 'PowerGel Hydro 24U',
    category: 'geles',
    categoryLabel: 'PowerGel',
    price: 42640,
    priceLabel: '₡42.640',
    priceUnit: 'caja 24 unidades',
    flavors: ['Cereza (+Cafeína)', 'Cola (+Cafeína)', 'Mojito (+Cafeína)', 'Naranja'],
    images: [
      'assets/img/productos/powergel-hydro-24u/cereza-cafeina-.webp',
      'assets/img/productos/powergel-hydro-24u/cola-cafeina-.webp',
      'assets/img/productos/powergel-hydro-24u/mojito-cafeina-.webp',
      'assets/img/productos/powergel-hydro-24u/naranja.webp',
    ],
    description: 'PowerGel Hydro es la innovación más avanzada de PowerBar en geles energéticos. Con textura más fluida y sin necesidad de tomar agua adicional, proporciona hidratos de carbono de rápida absorción y electrolitos. Disponible en sabores con y sin cafeína para adaptarse a cada momento de la carrera.',
    benefits: ['Sin necesidad de agua', 'Textura fluida', 'Con electrolitos', 'Rápida absorción', 'Cologne List®'],
  },
  {
    id: 'powergel-shots',
    name: 'PowerGel Shots 24U',
    category: 'geles',
    categoryLabel: 'PowerGel',
    price: 36465,
    priceLabel: '₡36.465',
    priceUnit: 'caja 24 unidades',
    flavors: ['Frambuesa', 'Naranja'],
    images: [
      'assets/img/productos/powergel-shots-24u/frambuesa.webp',
      'assets/img/productos/powergel-shots-24u/naranja.webp',
    ],
    description: 'PowerGel Shots son gominolas energéticas de alta concentración de carbohidratos. Con la fórmula C2MAX de fuentes de glucosa y fructosa, ofrecen energía rápida y sostenida durante el esfuerzo. Son una alternativa práctica y deliciosa a los geles tradicionales.',
    benefits: ['Formato gominola', 'Fórmula C2MAX', 'Fácil de consumir', 'Energía rápida y sostenida'],
  },
  {
    id: 'powergel-smoothies',
    name: 'PowerGel Smothies 16U',
    category: 'geles',
    categoryLabel: 'PowerGel',
    price: 28340,
    priceLabel: '₡28.340',
    priceUnit: 'caja 16 unidades',
    flavors: ['Banana-Blueberry'],
    images: [
      'assets/img/productos/powergel-smothies-16u/banana-blueberry.webp',
    ],
    description: 'PowerGel Smoothies combina el placer de un smoothie con la funcionalidad de un gel energético. Con frutas reales y carbohidratos de rápida disponibilidad, es la opción más deliciosa y natural para recargar energía durante actividades de larga duración como maratones y fondos en bicicleta.',
    benefits: ['Frutas reales', 'Textura smoothie', 'Carbohidratos rápidos', 'Muy fácil de tomar'],
  },

  /* =================== ELECTROLITOS =================== */
  {
    id: '5-electrolytes',
    name: '5 Electrolytes',
    category: 'electrolitos',
    categoryLabel: 'Electrolitos',
    price: 4810,
    priceLabel: '₡4.810',
    priceUnit: 'por tubo',
    flavors: ['Limón (+Cafeína)'],
    images: [
      'assets/img/productos/5-electrolytes/limon-cafeina-.webp',
    ],
    description: 'Comprimidos efervescentes con 5 electrolitos esenciales: sodio, cloruro, potasio, calcio y magnesio. Sin calorías, sin azúcar, sin aspartamo. 10 comprimidos producen hasta 2,5L de bebida. El magnesio contribuye al metabolismo energético. Ideal para entrenamientos donde querés evitar carbohidratos extra. Cologne List®.',
    benefits: ['5 electrolitos', 'Sin calorías', 'Sin azúcar', 'Sin aspartamo', 'Cologne List®'],
  },
  {
    id: 'isoactive-600g',
    name: 'Isoactive Bebida Isotónica 600g',
    category: 'electrolitos',
    categoryLabel: 'Electrolitos',
    price: 16705,
    priceLabel: '₡16.705',
    priceUnit: 'presentación 600g',
    flavors: ['Limón', 'Naranja', 'Red Fruit'],
    images: [
      'assets/img/productos/isoactive-bebida-isotonica-600g/limon.webp',
      'assets/img/productos/isoactive-bebida-isotonica-600g/naranja.webp',
      'assets/img/productos/isoactive-bebida-isotonica-600g/red-fruit.webp',
    ],
    description: 'Bebida isotónica PowerBar que aporta carbohidratos y electrolitos para mantener el rendimiento durante el ejercicio. Con la fórmula C2MAX y electrolitos en la proporción adecuada para reponer lo que perdés con el sudor. Excelente para entrenamientos de mediana a larga duración.',
    benefits: ['Fórmula C2MAX', 'Isotónica', 'Multi-sabor', 'Repone electrolitos', 'Durante el ejercicio'],
  },
  {
    id: 'isoactive-1320g',
    name: 'Isoactive Bebida Isotónica 1320g',
    category: 'electrolitos',
    categoryLabel: 'Electrolitos',
    price: 24050,
    priceLabel: '₡24.050',
    priceUnit: 'presentación 1320g',
    flavors: ['Naranja', 'Red Fruit'],
    images: [
      'assets/img/productos/isoactive-bebida-isotonica-1320g/naranja.webp',
      'assets/img/productos/isoactive-bebida-isotonica-1320g/red-fruit.webp',
    ],
    description: 'La presentación grande de Isoactive te ofrece mayor rendimiento por precio. Ideal para atletas de alto volumen de entrenamiento como ciclistas de largo aliento, triatlonistas y runners que necesitan reponer electrolitos y energía con regularidad.',
    benefits: ['Mayor volumen', 'Mejor precio por porción', 'Carbohidratos + electrolitos', 'Para atletas de alto volumen'],
  },
  {
    id: 'fuel-90',
    name: 'Fuel 90 Bebida Deportiva Alta Carbohidratos',
    category: 'electrolitos',
    categoryLabel: 'Electrolitos',
    price: 37830,
    priceLabel: '₡37.830',
    priceUnit: 'por presentación',
    flavors: ['Limón'],
    images: [
      'assets/img/productos/fuel-90-bebida-deportiva-alta-en-carbohidratos/limon.webp',
    ],
    description: 'Fuel 90 es la solución de carbohidratos de máxima concentración de PowerBar, diseñada para atletas de ultra-resistencia. Con 90g de carbohidratos por hora en la proporción 1:0,8, es el estándar oro para triatletas Ironman, ciclistas de etapas y corredores de ultra-fondo.',
    benefits: ['90g carbohidratos/hora', 'Ultra-resistencia', 'Proporción 1:0.8', 'Black Line', 'Triatlón Ironman'],
  },
  {
    id: 'iso-fuel-30',
    name: 'Iso Fuel 30 Bebida Isotónica',
    category: 'electrolitos',
    categoryLabel: 'Electrolitos',
    price: 18460,
    priceLabel: '₡18.460',
    priceUnit: 'por presentación',
    flavors: ['Limón'],
    images: [
      'assets/img/productos/iso-fuel-30-bebida-isotonica/limon.webp',
    ],
    description: 'Bebida isotónica vegana con 30g de carbohidratos por ración en proporción 1:0,8 (glucosa:fructosa). Desarrollada para usarse antes y durante el ejercicio como parte del sistema de carbohidratos Black Line. Mejora la oxidación de carbohidratos y la tolerancia intestinal durante esfuerzos prolongados.',
    benefits: ['30g carbohidratos', 'Vegana', 'Black Line', 'Proporción 1:0.8', 'Tolerancia intestinal mejorada'],
  },

  /* =================== BARRAS =================== */
  {
    id: 'energize-original-15u',
    name: 'Energize Original 15U',
    category: 'barras',
    categoryLabel: 'Barras',
    price: 26000,
    priceLabel: '₡26.000',
    priceUnit: 'caja 15 unidades',
    flavors: ['Banana Punch', 'Berry', 'Cookies & Cream'],
    images: [
      'assets/img/productos/energize-original-15u/banana-punch.webp',
      'assets/img/productos/energize-original-15u/berry.webp',
      'assets/img/productos/energize-original-15u/cookies-cream.webp',
    ],
    description: 'La barrita energética original de PowerBar, pionera de la nutrición deportiva moderna. Con alta concentración de carbohidratos complejos para energía sostenida durante el ejercicio, perfecta para ciclistas, corredores y triatlonistas antes y durante la actividad física de larga duración.',
    benefits: ['Carbohidratos complejos', 'Energía sostenida', 'Durante el ejercicio', 'Cologne List®', 'La original desde 1986'],
  },
  {
    id: 'proteincrisp-12u',
    name: 'ProteinCrisp Barrita de Proteína 40% 12U',
    category: 'barras',
    categoryLabel: 'Barras',
    price: 28600,
    priceLabel: '₡28.600',
    priceUnit: 'caja 12 unidades',
    flavors: ['Caramelo', 'Choco-coco', 'Fresa Chocolate Blanco'],
    images: [
      'assets/img/productos/proteincrisp-barrita-de-proteina-40-12u/caramelo.webp',
      'assets/img/productos/proteincrisp-barrita-de-proteina-40-12u/choco-coco.webp',
      'assets/img/productos/proteincrisp-barrita-de-proteina-40-12u/fresa-chocolate-blanco.webp',
    ],
    description: '40% de proteína de alta calidad en una textura crujiente y suave irresistible. Sin azúcares añadidos, con mezcla perfecta de ingredientes crujientes y capa suave. La recompensa ideal después del entrenamiento. Es el snack proteico premium para el deportista exigente. Cologne List®.',
    benefits: ['40% proteína', 'Sin azúcar añadido', 'Textura crujiente', 'Post-workout', 'Cologne List®'],
  },
  {
    id: 'creatina-proseries',
    name: 'Creatina ProSeries',
    category: 'suplementos',
    categoryLabel: 'Suplementos',
    price: 23900,
    priceLabel: '₡23.900',
    priceUnit: 'por presentación',
    flavors: ['Unflavored'],
    images: [
      'assets/img/productos/creatina/creatina-proseries.png',
    ],
    description: 'Creatina ProSeries de Muscle Milk es monohidrato de creatina de alta pureza. Ayuda a aumentar la fuerza, el rendimiento y la masa muscular. Certificado por NSF para Deporte, garantizando que está libre de sustancias prohibidas.',
    benefits: ['100% Monohidrato', 'Aumento de fuerza', 'Masa muscular', 'NSF Certified'],
  },
  {
    id: 'anfora-powerbar',
    name: 'Ánfora PowerBar',
    category: 'otros',
    categoryLabel: 'Otros',
    price: 4000,
    priceLabel: '₡4.000',
    priceUnit: 'por unidad',
    flavors: ['Estándar'],
    images: [
      'assets/img/productos/anfora/anfora-powerbar.png',
    ],
    description: 'Botella deportiva Ánfora PowerBar de alta calidad. Diseño ergonómico, fácil de apretar y con válvula de alto flujo. Ideal para hidratarte durante tus entrenamientos de ciclismo, running o en el gimnasio.',
    benefits: ['Fácil de apretar', 'Válvula alto flujo', 'Diseño ergonómico', 'Libre de BPA'],
  },
];

const PROMO_CODES = {
  'PURAELITE': 0.05, 'PISTA5': 0.05, 'TICOFIT': 0.05, 'PODIUM5': 0.05,
  'ELITE10': 0.10, 'RECORD10': 0.10, 'RÉCORD10': 0.10, 'TICOSTRONG': 0.10, 'SPRINT10': 0.10, 'VOLTAJE10': 0.10,
  'ORO15': 0.15, 'CAMPEON': 0.15, 'MEDALLA15': 0.15,
  'FUEGO20': 0.20, 'CUMBRE20': 0.20, 'RESISTENCIA': 0.20, 'VALJI20': 0.20, 'JUEGOS20': 0.20,
  'MAXIMA30': 0.30, 'OFFSEASON': 0.30, 'TRAINING30': 0.30, 'NOPARA30': 0.30,
  'LEGEND40': 0.40, 'CROWN40': 0.40, 'GOAT40': 0.40, 'ELITE40': 0.40, 'ÉLITE40': 0.40,
  'COACHVALJI': 0.23, 'GYMVALJI': 0.23, 'NUTRIVALJI': 0.23, 'ALIADOSVALJI': 0.23
};

const PROMO_2X1 = [
  'DOBLE1', 'DUPLA', '2X1VALJI', '2X1POWER', 'DOSXUNO',
  'PURA2X1', 'AMIGOS2X1', 'TEAM2X1', 'COMBO2X1', 'PAIR'
];

/* ── UTILS ────────────────────────────────────────────────── */
function formatPrice(n) {
  return '₡' + n.toLocaleString('es-CR');
}

function buildWALink(text) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

/* ── CART STATE ───────────────────────────────────────────── */
let cart = [];
let appliedDiscount = 0;
let appliedPromoCode = '';
let is2x1 = false;

function getCartItem(productId, flavor) {
  return cart.find(i => i.productId === productId && i.flavor === flavor);
}

function addToCart(product, flavor, qty = 1) {
  const existing = getCartItem(product.id, flavor);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      flavor,
      price: product.price,
      priceLabel: product.priceLabel,
      image: product.images[product.flavors.indexOf(flavor)] || product.images[0],
      qty,
    });
  }
  updateCart();
  showToast(`¡${product.name}${flavor ? ' – ' + flavor : ''} agregado al carrito!`);
}

function removeFromCart(productId, flavor) {
  cart = cart.filter(i => !(i.productId === productId && i.flavor === flavor));
  updateCart();
}

function changeCartQty(productId, flavor, delta) {
  const item = getCartItem(productId, flavor);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId, flavor);
  else updateCart();
}

function calc2x1Discount() {
  const units = [];
  cart.forEach(item => {
    for (let i = 0; i < item.qty; i++) units.push(item.price);
  });
  units.sort((a, b) => a - b);
  let discount = 0;
  for (let i = 0; i < Math.floor(units.length / 2); i++) {
    discount += units[i];
  }
  return discount;
}

function updateCart() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmount = is2x1 ? calc2x1Discount() : Math.round(subtotal * appliedDiscount);
  const afterDiscount = subtotal - discountAmount;
  const iva = Math.round(afterDiscount * 0.13);
  const total = afterDiscount + iva;

  document.getElementById('cart-count').textContent = cart.reduce((s, i) => s + i.qty, 0);

  // Update Cart Footer
  document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);

  const divDiscount = document.getElementById('div-discount');
  if (appliedDiscount > 0) {
    divDiscount.style.display = 'flex';
    document.getElementById('cart-discount').textContent = `-${formatPrice(discountAmount)}`;
  } else {
    divDiscount.style.display = 'none';
  }

  document.getElementById('cart-iva').textContent = formatPrice(iva);
  document.getElementById('cart-total-price').textContent = formatPrice(total);

  renderCartItems();
  buildWAOrderLink();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Tu carrito está vacío.<br>¡Añade productos para ordenar!</p>';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.style.display='none'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.flavor ? `<div class="cart-item-flavor">Sabor: ${item.flavor}</div>` : ''}
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="changeCartQty('${item.productId}','${item.flavor}',-1)">−</button>
          <span class="cart-qty-val">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty('${item.productId}','${item.flavor}',1)">+</button>
          <button class="cart-remove-btn" onclick="removeFromCart('${item.productId}','${item.flavor}')" title="Eliminar">${ICON.trash}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function buildWAOrderLink() {
  if (cart.length === 0) {
    document.getElementById('whatsapp-order-btn').href = buildWALink('Hola Valji, me gustaría hacer un pedido.');
    return;
  }

  let msg = '¡Hola Valji! Quiero hacer el siguiente pedido:\n\n';
  cart.forEach(item => {
    msg += `• ${item.name}`;
    if (item.flavor) msg += ` – ${item.flavor}`;
    msg += ` x${item.qty} (${formatPrice(item.price * item.qty)})\n`;
  });

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const afterDiscount = subtotal - discountAmount;
  const iva = Math.round(afterDiscount * 0.13);
  const total = afterDiscount + iva;

  const discountAmount2 = is2x1 ? calc2x1Discount() : Math.round(subtotal * appliedDiscount);
  msg += `\nSubtotal: ${formatPrice(subtotal)}`;
  if (is2x1 || appliedDiscount > 0) {
    const label = is2x1 ? `2x1 (${appliedPromoCode})` : appliedPromoCode;
    msg += `\nDescuento (${label}): -${formatPrice(discountAmount2)}`;
  }
  msg += `\nIVA (13%): ${formatPrice(iva)}`;
  msg += `\n*TOTAL: ${formatPrice(total)}*`;

  msg += '\n\nEnvio gratis a nivel nacional';
  msg += '\n\nPueden confirmar disponibilidad para coordinar el pago. Gracias.';
  document.getElementById('whatsapp-order-btn').href = buildWALink(msg);
}

/* ── TOAST ────────────────────────────────────────────────── */
let toastTimeout;
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  clearTimeout(toastTimeout);
  requestAnimationFrame(() => {
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
  });
}

/* ── CART SIDEBAR ─────────────────────────────────────────── */
function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-btn').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

/* ── PRODUCT MODAL ────────────────────────────────────────── */
let currentProduct = null;
let selectedFlavor = '';
let modalQty = 1;

function openProductModal(product) {
  currentProduct = product;
  selectedFlavor = product.flavors[0] || '';
  modalQty = 1;

  document.getElementById('modal-category-badge').textContent = product.categoryLabel;
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-price').textContent = `${product.priceLabel}  ${product.priceUnit || ''}`;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('qty-value').textContent = 1;

  // Images
  const mainImg = document.getElementById('modal-main-img');
  mainImg.src = product.images[0];
  mainImg.alt = product.name;

  // Flavor thumbnails
  const thumbsContainer = document.getElementById('modal-flavors');
  thumbsContainer.innerHTML = product.images.map((img, i) => `
    <img class="modal-flavor-thumb ${i === 0 ? 'active' : ''}"
         src="${img}"
         alt="${product.flavors[i] || ''}"
         data-index="${i}"
         onerror="this.style.display='none'" />
  `).join('');
  thumbsContainer.querySelectorAll('.modal-flavor-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.index);
      mainImg.src = product.images[idx];
      selectedFlavor = product.flavors[idx] || '';
      thumbsContainer.querySelectorAll('.modal-flavor-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      updateFlavorBtns();
    });
  });

  // Benefits
  const benefitsEl = document.getElementById('modal-benefits');
  benefitsEl.innerHTML = (product.benefits || []).map(b => `<span class="benefit-tag">✓ ${b}</span>`).join('');

  // Flavor buttons
  const flavorBtns = document.getElementById('modal-flavor-btns');
  flavorBtns.innerHTML = product.flavors.map(f =>
    `<button class="flavor-btn ${f === selectedFlavor ? 'active' : ''}" data-flavor="${f}">${f}</button>`
  ).join('');
  flavorBtns.querySelectorAll('.flavor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedFlavor = btn.dataset.flavor;
      const idx = product.flavors.indexOf(selectedFlavor);
      if (idx >= 0) {
        mainImg.src = product.images[idx];
        thumbsContainer.querySelectorAll('.modal-flavor-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
      }
      updateFlavorBtns();
    });
  });

  // WhatsApp direct
  const waText = `Hola Valji, me interesa: ${product.name}${selectedFlavor ? ' – ' + selectedFlavor : ''}. Tienen disponibilidad. Precio: ${product.priceLabel}`;
  document.getElementById('modal-whatsapp-btn').href = buildWALink(waText);

  document.getElementById('product-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateFlavorBtns() {
  document.querySelectorAll('#modal-flavor-btns .flavor-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.flavor === selectedFlavor);
  });
  if (currentProduct) {
    const waText = `Hola Valji, me interesa: ${currentProduct.name}${selectedFlavor ? ' – ' + selectedFlavor : ''}. Tienen disponibilidad. Precio: ${currentProduct.priceLabel}`;
    document.getElementById('modal-whatsapp-btn').href = buildWALink(waText);
  }
}

function closeProductModal() {
  document.getElementById('product-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentProduct = null;
}

document.getElementById('modal-close-btn').addEventListener('click', closeProductModal);
document.getElementById('product-modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('product-modal-overlay')) closeProductModal();
});

document.getElementById('qty-minus').addEventListener('click', () => {
  if (modalQty > 1) { modalQty--; document.getElementById('qty-value').textContent = modalQty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  modalQty++; document.getElementById('qty-value').textContent = modalQty;
});

document.getElementById('modal-add-cart').addEventListener('click', () => {
  if (!currentProduct) return;
  addToCart(currentProduct, selectedFlavor, modalQty);
  closeProductModal();
  openCart();
});

/* ── PRODUCTS GRID ────────────────────────────────────────── */
let activeFilter = 'all';

function renderProducts(filter = 'all') {
  activeFilter = filter;
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  const grid = document.getElementById('products-grid');
  grid.innerHTML = filtered.map((product, idx) => `
    <div class="product-card" style="animation-delay:${idx * 0.06}s" data-id="${product.id}" role="button" tabindex="0" aria-label="Ver detalles de ${product.name}">
      <div class="product-card-img-wrap">
        <img class="product-card-img" src="${product.images[0]}" alt="${product.name}" loading="lazy" onerror="this.src=''" />
        <span class="product-card-category">${product.categoryLabel}</span>
        <span class="product-card-shipping"><span class="icon-inline">${ICON.truck}</span> Envio gratis</span>
      </div>
      <div class="product-card-body">
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-flavors">
          ${product.flavors.map(() => `<div class="flavor-dot" style="background:hsl(${Math.floor(Math.random() * 360)},60%,60%)"></div>`).join('')}
          <span style="font-size:0.78rem;color:var(--text-muted);margin-left:4px">${product.flavors.length} sabor${product.flavors.length > 1 ? 'es' : ''}</span>
        </div>
        <div class="product-card-price">${product.priceLabel}</div>
      </div>
      <div class="product-card-footer">
        ${product.flavors.length === 1 ? `<button class="btn-card-quickadd" onclick="event.stopPropagation();addToCart(PRODUCTS.find(p=>p.id==='${product.id}'),'${product.flavors[0]}',1)" aria-label="Agregar al carrito"><span class="icon-inline">${ICON.cart}</span> Agregar</button>` : `<span class="btn-card-details">Ver detalles</span>`}
        <a class="btn-card-wa" href="${buildWALink(`Hola Valji, me interesa: ${product.name}. Tienen disponibilidad.`)}" target="_blank" aria-label="WhatsApp" title="Consultar por WhatsApp" onclick="event.stopPropagation()">
          <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.5 8.5C21.7 6.7 19.3 5.7 16.7 5.7C11.3 5.7 6.9 10.1 6.9 15.5C6.9 17.3 7.4 19 8.2 20.5L6.8 25.5L11.9 24.1C13.4 24.9 15 25.3 16.7 25.3C22.1 25.3 26.5 20.9 26.5 15.5C26.5 12.9 25.3 10.3 23.5 8.5ZM16.7 23.7C15.2 23.7 13.6 23.3 12.3 22.5L11.9 22.3L8.9 23.1L9.7 20.2L9.5 19.8C8.6 18.4 8.2 16.9 8.2 15.5C8.2 10.9 11.9 7.1 16.7 7.1C19 7.1 21.1 8 22.7 9.6C24.3 11.2 25.2 13.3 25.2 15.5C25.2 20.1 21.4 23.7 16.7 23.7ZM21.4 17.7C21.1 17.5 19.6 16.8 19.4 16.7C19.1 16.6 19 16.5 18.8 16.8C18.7 17.1 18.1 17.7 17.9 17.9C17.8 18.1 17.6 18.1 17.4 18C15.8 17.2 14.8 16.6 13.7 14.8C13.4 14.3 14 14.3 14.5 13.3C14.6 13.1 14.5 12.9 14.5 12.8C14.4 12.6 13.8 11.1 13.6 10.5C13.3 9.9 13.1 10 12.9 10C12.7 10 12.6 10 12.4 10C12.2 10 11.9 10.1 11.6 10.4C11.4 10.7 10.6 11.4 10.6 12.9C10.6 14.4 11.6 15.8 11.8 16.1C12 16.3 13.8 19 16.4 19.9C18.1 20.5 18.8 20.6 19.7 20.4C20.3 20.3 21.4 19.7 21.7 19C21.9 18.3 21.9 17.7 21.7 17.7H21.4Z" fill="white"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  // Card click → open modal (delegated)
  grid.querySelectorAll('.product-card').forEach(card => {
    const handler = () => {
      const p = PRODUCTS.find(p => p.id === card.dataset.id);
      if (p) openProductModal(p);
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });
}

// Filter tabs
document.getElementById('filter-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderProducts(tab.dataset.filter);
});

// Global filterByCategory (called from footer)
window.filterByCategory = function (cat) {
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === cat);
  });
  renderProducts(cat);
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
};

/* ── NAVBAR SCROLL ────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── HAMBURGER ────────────────────────────────────────────── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
});

/* ── FAQ ──────────────────────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── HERO PARTICLES ───────────────────────────────────────── */
(function createParticles() {
  const container = document.getElementById('hero-particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 10}s;
      opacity:${Math.random() * 0.6 + 0.2};
    `;
    container.appendChild(p);
  }
})();

/* ── INTERSECTION OBSERVER (scroll reveal) ────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-card, .trust-item, .faq-item, .about-feature, .contact-item').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${i * 0.05}s, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${i * 0.05}s`;
  revealObserver.observe(el);
});

/* ── PROMO CODES ───────────────────────────────────────────── */
document.getElementById('apply-promo-btn').addEventListener('click', () => {
  const code = document.getElementById('promo-code-input').value.trim().toUpperCase();
  const msgEl = document.getElementById('promo-message');

  if (!code) {
    appliedDiscount = 0;
    appliedPromoCode = '';
    is2x1 = false;
    msgEl.textContent = '';
    updateCart();
    return;
  }

  if (PROMO_2X1.includes(code)) {
    is2x1 = true;
    appliedDiscount = 0;
    appliedPromoCode = code;
    msgEl.textContent = `¡Codigo ${code} aplicado! (2x1 - el mas barato gratis)`;
    msgEl.className = 'promo-message success';
    showToast(`Promo 2x1 activada!`);
  } else if (PROMO_CODES[code]) {
    is2x1 = false;
    appliedDiscount = PROMO_CODES[code];
    appliedPromoCode = code;
    msgEl.textContent = `¡Codigo ${code} aplicado! (${appliedDiscount * 100}% off)`;
    msgEl.className = 'promo-message success';
    showToast(`Codigo promo ${code} aplicado!`);
  } else {
    appliedDiscount = 0;
    appliedPromoCode = '';
    is2x1 = false;
    msgEl.textContent = 'Codigo no valido.';
    msgEl.className = 'promo-message error';
  }
  updateCart();
});

/* ── INIT ─────────────────────────────────────────────────── */
renderProducts('all');
updateCart();
buildWAOrderLink();
