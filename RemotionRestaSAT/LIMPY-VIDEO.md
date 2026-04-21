# Video Publicitario de Limpy - Documentación

## 📋 Información General

Este video promocional de 15 segundos fue generado automáticamente extrayendo datos del archivo HTML de Limpy ubicado en `public/img/pagina/index.html`.

**Formato:** Vertical (1080x1920) optimizado para redes sociales  
**Duración:** 15 segundos (450 frames @ 30fps)  
**Estilo:** Profesional, minimalista, sin emojis

---

## 🎨 Datos Extraídos del HTML

### Marca
- **Nombre:** Limpy
- **Tagline:** "Líder en Limpieza Profesional"
- **Slogan:** "Tu hogar impecable, tu tiempo liberado"
- **URL:** limpy.gestoriaencasa.es
- **Logo:** https://limpy.gestoriaencasa.es/_next/image/?url=/images/logos/logo-blue.webp&w=256&q=75

### Paleta de Colores
```js
{
  primary: '#A1B318',    // Verde lima (color principal)
  secondary: '#6366F1',  // Índigo
  accent: '#9333EA'      // Púrpura (badges premium)
}
```

### Servicios Identificados
1. **Limpieza Profunda** - Badge: "Servicio Esencial"
2. **Limpieza Regular** - Badge: "Suscripción"
3. **Limpieza Ecológica** - Badge: "★ Premium Eco"

### Fuentes Tipográficas
- **Display:** Playfair Display (títulos)
- **Body:** DM Sans (textos)

---

## 🎬 Estructura del Video

### Escena 1 (0-4s): Logo y Entrada
- Animación del logo de Limpy con efecto spring
- Texto: "Servicios de limpieza profesional a domicilio"
- Icono de casa (lucide-react)
- Tagline: "Líder en Limpieza Profesional"

### Escena 2 (4-9s): Slider de Servicios
- Rotación automática de 3 servicios
- Cada servicio dura 1.5 segundos
- Iconos vectoriales profesionales (Sparkles, Shield, Clock)
- Indicadores de progreso animados
- Badge inferior: "Reserva en minutos"

### Escena 3 (9-13s): Oferta de Descuento
- Badge central animado con "20% de DESCUENTO"
- Efecto de pulso sutil (heartbeat)
- Texto: "en tu primera reserva"
- Icono de porcentaje rotatorio
- Badge: "Oferta Limitada"

### Escena 4 (13-15s): Call to Action
- Título: "¡Agenda ahora!"
- Botón: "Reservar Servicio" con efecto de pulso
- URL: limpy.gestoriaencasa.es
- Logo de Limpy al final

---

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── LimpyVertical.tsx           # Composición principal (4 escenas)
│   ├── LimpyServiceSlider.tsx      # Slider de servicios animado
│   └── LimpyDiscountOffer.tsx      # Banner de oferta
├── data/
│   └── limpyData.ts                # Datos extraídos del HTML
└── style.css                       # Fuentes y estilos Tailwind
```

---

## 🔄 Cómo Actualizar el Video

### Opción 1: Modificar el archivo de datos
Edita `src/data/limpyData.ts` para cambiar:
- Servicios
- Colores
- Textos
- URLs
- Ofertas

```typescript
export const limpyData = {
  brand: {
    name: 'Limpy',
    // ... modificar aquí
  },
  services: [
    {
      title: 'Nuevo Servicio',
      badge: 'Nueva Categoría',
      description: 'Descripción del servicio',
      imageName: 'imagen.webp',
    },
  ],
  // ...
};
```

### Opción 2: Re-extraer del HTML
Si actualizas el archivo `public/img/pagina/index.html`:

1. Abre `src/data/limpyData.ts`
2. Revisa el HTML para nuevos servicios o cambios de color
3. Actualiza manualmente los valores en `limpyData`

---

## 🎨 Personalización de Estilos

### Cambiar colores
Edita `tailwind.config.js`:
```js
colors: {
  'limpy-green': '#NUEVO_COLOR',
  'limpy-indigo': '#NUEVO_COLOR',
}
```

### Cambiar fuentes
Edita `src/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap');
```

Luego actualiza `tailwind.config.js`:
```js
fontFamily: {
  'display': ['TU_FUENTE', 'serif'],
}
```

---

## 🚀 Comandos de Uso

### Ver el video en el editor
```bash
npm start
```
Selecciona "LimpyVertical" en el dropdown del Remotion Studio

### Renderizar el video final
```bash
npx remotion render LimpyVertical out/limpy-promo.mp4
```

### Renderizar con alta calidad
```bash
npx remotion render LimpyVertical out/limpy-hq.mp4 --codec h264 --quality 95
```

### Renderizar para Instagram Stories
```bash
npx remotion render LimpyVertical out/limpy-ig-story.mp4 --codec h264 --quality 85
```

---

## 🎯 Características Técnicas

### Animaciones Utilizadas
- **spring**: Movimientos naturales y elásticos
- **interpolate**: Transiciones lineales suaves
- **Pulso continuo**: Efecto heartbeat en el descuento

### Iconos (lucide-react)
- Home (casa)
- Sparkles (brillo)
- Shield (escudo)
- Clock (reloj)
- Calendar (calendario)
- Globe (globo)
- Percent (porcentaje)
- Tag (etiqueta)

### Sin Emojis
Todos los iconos son vectoriales SVG profesionales de lucide-react.

---

## 💡 Tips de Optimización

### Cambiar duración de escenas
Edita los valores en `src/components/LimpyVertical.tsx`:

```typescript
<Sequence from={0} durationInFrames={120}>    // 4 segundos
<Sequence from={120} durationInFrames={150}>  // 5 segundos
<Sequence from={270} durationInFrames={120}>  // 4 segundos
<Sequence from={390} durationInFrames={60}>   // 2 segundos
```

### Cambiar velocidad del slider
En `src/components/LimpyServiceSlider.tsx`:
```typescript
const serviceDuration = fps * 2; // Cambia de 1.5 a 2 segundos
```

### Ajustar intensidad de animaciones
En cualquier componente con spring:
```typescript
config: {
  damping: 20,    // Más alto = menos rebote
  stiffness: 90,  // Más bajo = más lento
}
```

---

## 📊 Comparación con RestaSAT

| Característica | RestaSAT | Limpy |
|----------------|----------|-------|
| **Formato** | 1920x1080 (horizontal) | 1080x1920 (vertical) |
| **Colores** | Azul + Naranja | Verde + Índigo |
| **Fuentes** | Outfit + Inter | Playfair + DM Sans |
| **Estilo** | Industrial, técnico | Limpio, profesional |
| **Iconos** | Emojis | Lucide React (SVG) |

---

## 🆘 Solución de Problemas

### El logo no se carga
Verifica que la URL del logo esté accesible:
```
https://limpy.gestoriaencasa.es/_next/image/?url=/images/logos/logo-blue.webp&w=256&q=75
```

### Los colores no se aplican
1. Verifica `tailwind.config.js`
2. Reinicia el servidor: `Ctrl+C` y `npm start`

### Errores de iconos
Asegúrate de tener instalado lucide-react:
```bash
npm install lucide-react
```

---

## 📝 Notas Importantes

- **Imágenes de servicios:** Actualmente se usan placeholders. Coloca tus imágenes .webp en `public/img/` y actualiza los nombres en `limpyData.ts`
- **Logo:** Se carga desde la URL externa. Para mejor rendimiento, descarga el logo y colócalo en `public/img/`
- **Fuentes:** Se cargan desde Google Fonts. Asegúrate de tener conexión a internet durante el desarrollo

---

**Creado con:** Remotion + React + TypeScript + Tailwind CSS + Lucide Icons

**Datos extraídos de:** `public/img/pagina/index.html`
