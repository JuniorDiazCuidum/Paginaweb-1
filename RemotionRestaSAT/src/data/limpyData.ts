// Datos extraídos del HTML de Limpy (public/img/pagina/index.html)
// Este archivo centraliza toda la información para facilitar actualizaciones

export const limpyData = {
  // Información de marca
  brand: {
    name: 'Limpy',
    tagline: 'Líder en Limpieza Profesional',
    slogan: 'Tu hogar impecable, tu tiempo liberado',
    url: 'limpy.gestoriaencasa.es',
    logoUrl: 'https://limpy.gestoriaencasa.es/_next/image/?url=/images/logos/logo-blue.webp&w=256&q=75',
  },

  // Paleta de colores (extraída del HTML y CSS)
  colors: {
    primary: '#A1B318',      // Verde lima (color principal de Limpy)
    secondary: '#6366F1',    // Índigo
    accent: '#9333EA',       // Púrpura (badges premium)
  },

  // Servicios (extraídos de la sección de servicios)
  services: [
    {
      id: 1,
      title: 'Limpieza Profunda',
      badge: 'Servicio Esencial',
      description: 'Limpieza exhaustiva de cada rincón',
      // Asume que tienes imágenes en public/img/
      imageName: 'limpieza-profunda.webp', // REEMPLAZAR con tu archivo real
    },
    {
      id: 2,
      title: 'Limpieza Regular',
      badge: 'Suscripción',
      description: 'Mantenimiento semanal o quincenal',
      imageName: 'limpieza-regular.webp', // REEMPLAZAR con tu archivo real
    },
    {
      id: 3,
      title: 'Limpieza Ecológica',
      badge: '★ Premium Eco',
      description: 'Productos 100% biodegradables',
      imageName: 'limpieza-ecologica.webp', // REEMPLAZAR con tu archivo real
    },
  ],

  // Ofertas y promociones
  offer: {
    discount: '20%',
    description: 'de DESCUENTO',
    subtitle: 'en tu primera reserva',
  },

  // Call to action
  cta: {
    primary: '¡Agenda ahora!',
    secondary: 'Reservar Servicio',
  },

  // Estadísticas (del HTML)
  stats: {
    satisfaction: '98%',
    clients: '2500+',
  },
};
