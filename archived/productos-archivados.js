/* ============================================================
   VALJI – PRODUCTOS ARCHIVADOS
   Productos que salieron del catálogo pero pueden volver.
   Este archivo NO se carga en el sitio ni se publica (ver .vercelignore).

   Para revivir un producto:
   1. Copiá su bloque de acá al arreglo PRODUCTS de app.js.
   2. Mové su carpeta de imágenes de archived/assets/img/productos/...
      a assets/img/productos/... (misma ruta, sin el "archived/").
   3. Quitale el "archived/" a las rutas de images.
   4. Revisá el precio antes de publicar.

   Archivados el 2026-10-05: toda la línea Muscle Milk (incluida la
   Creatina ProSeries) y Oikos.
   ============================================================ */
const PRODUCTOS_ARCHIVADOS = [
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
      'archived/assets/img/productos/proteinas/oikos-shake/chocolate.webp',
      'archived/assets/img/productos/proteinas/oikos-shake/vainilla.webp',
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
      'archived/assets/img/productos/proteinas/muscle-milk-shake/chocolate.png',
    ],
    description: 'Muscle Milk Genuine es la proteína de alto rendimiento favorita de atletas profesionales. Con una mezcla avanzada de proteínas de acción rápida y lenta, te proporciona aminoácidos durante más tiempo para maximizar la síntesis muscular.',
    benefits: ['Proteína multi-fuente', 'Soporte muscular prolongado', 'Sin azúcares añadidos', 'Ideal post-workout'],
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
      'archived/assets/img/productos/proteinas/gainer-muscle-milk-5lbs/chocolate.png',
      'archived/assets/img/productos/proteinas/gainer-muscle-milk-5lbs/vainilla-creme.png',
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
      'archived/assets/img/productos/proteinas/muscle-milk-2lbs/chocolate.png',
      'archived/assets/img/productos/proteinas/muscle-milk-2lbs/cookies-n-creme.png',
      'archived/assets/img/productos/proteinas/muscle-milk-2lbs/fresa.png',
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
      'archived/assets/img/productos/proteinas/muscle-milk-5lbs/chocolate.png',
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
      'archived/assets/img/productos/proteinas/muscle-milk-cero-1.65lbs/vainilla-creme.png',
    ],
    description: 'Muscle Milk Zero es la opción ideal para quienes buscan maximizar la ingesta proteica sin agregar azúcares ni calorías extra. Con 0g de azúcar y una alta concentración de proteína por porción, es perfecta para deportistas en etapa de definición.',
    benefits: ['0g azúcar', 'Alta proteína', 'Baja en calorías', 'Ideal para definición'],
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
      'archived/assets/img/productos/suplementos/creatina-proseries/creatina-proseries.png',
    ],
    description: 'Creatina ProSeries de Muscle Milk es monohidrato de creatina de alta pureza. Ayuda a aumentar la fuerza, el rendimiento y la masa muscular. Certificado por NSF para Deporte, garantizando que está libre de sustancias prohibidas.',
    benefits: ['100% Monohidrato', 'Aumento de fuerza', 'Masa muscular', 'NSF Certified'],
  },
];
