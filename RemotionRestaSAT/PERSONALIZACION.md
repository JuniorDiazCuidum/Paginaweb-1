# Guía Rápida de Personalización

## 🎨 Cambios Rápidos y Comunes

### 1. Cambiar el descuento (de -20% a otro valor)

**Archivo:** `src/components/DiscountBadge.tsx`

```tsx
// Línea ~60
<div className="text-white text-7xl font-display font-black leading-none mb-2">
  -30%  {/* Cambia este valor */}
</div>
```

### 2. Modificar servicios del slider

**Archivo:** `src/components/ServiceSlider.tsx`

```tsx
// Línea ~10
const services: Service[] = [
  { title: 'Instalación de Equipos Nuevos', icon: '⚙️' },
  { title: 'Reparación de Hornos y Cocinas', icon: '🔥' },
  { title: 'Mantenimiento de Frío Industrial', icon: '❄️' },
  { title: 'Lavavajillas y Maquinaria de Lavado', icon: '💧' },
];
```

### 3. Cambiar colores de marca

**Archivo:** `tailwind.config.js`

```js
colors: {
  'restasat-blue': '#003d82',    // Azul más oscuro
  'restasat-orange': '#FF8C42',  // Naranja más claro
},
```

### 4. Modificar textos principales

**Archivo:** `src/Composition.tsx`

**Gancho inicial (Scene1, ~línea 80):**
```tsx
<h2 className="text-5xl font-display font-bold text-white leading-tight">
  Expertos en reparación de hostelería  {/* Tu nuevo texto */}
</h2>
```

**Texto de servicio técnico (Scene2, ~línea 140):**
```tsx
<p className="text-2xl font-body font-medium text-white">
  Servicio 24/7 en toda Valencia  {/* Tu nuevo texto */}
</p>
```

**Título de promo (Scene3, ~línea 175):**
```tsx
<div className="text-6xl font-display font-black text-white text-center mb-12">
  <div className="mb-2">OFERTA ESPECIAL</div>  {/* Tu nuevo texto */}
</div>
```

**CTA (Scene4, ~línea 235):**
```tsx
<h3 className="text-6xl font-display font-black text-white text-center">
  Contáctanos ahora  {/* Tu nuevo texto */}
</h3>
```

### 5. Cambiar duración de escenas

**Archivo:** `src/Composition.tsx`

```tsx
// Ejemplo: Hacer Scene1 más larga (4 segundos en vez de 3)
<Sequence from={0} durationInFrames={120}>  {/* 4s * 30fps = 120 */}
  <Scene1 />
</Sequence>

// IMPORTANTE: Ajusta las siguientes escenas
<Sequence from={120} durationInFrames={150}>  {/* Empieza en 120 ahora */}
  <Scene2 />
</Sequence>
```

### 6. Usar logo real en vez de texto

**Archivo:** `src/Composition.tsx` en Scene1

Reemplaza esto (~línea 65):
```tsx
<div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
  <div className="text-8xl font-display font-black text-restasat-blue">
    RestaSAT
  </div>
</div>
```

Por esto:
```tsx
<Img 
  src="img/logo.png" 
  className="w-96 h-96 object-contain bg-white rounded-3xl shadow-2xl p-12 mb-8"
  style={{
    transform: `scale(${logoScale})`,
  }}
/>
```

Y añade el import al inicio:
```tsx
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig, spring, Img } from 'remotion';
```

### 7. Cambiar website

**Archivo:** `src/Composition.tsx` en Scene4 (~línea 260)

```tsx
<span className="text-4xl font-body font-semibold text-white">
  www.tuempresa.com  {/* Tu website */}
</span>
```

### 8. Ajustar velocidad del slider

**Archivo:** `src/components/ServiceSlider.tsx`

```tsx
// Línea ~20
const serviceDuration = fps * 2;  // Cambia de 1.5 a 2 segundos
```

### 9. Cambiar fuentes

**Archivo:** `tailwind.config.js`

```js
fontFamily: {
  'display': ['Montserrat', 'system-ui', 'sans-serif'],
  'body': ['Open Sans', 'system-ui', 'sans-serif'],
},
```

Y actualiza en `src/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500;600&display=swap');
```

### 10. Ajustar intensidad de animaciones

**Para animaciones más suaves:**
```tsx
const scale = spring({
  frame,
  fps,
  config: {
    damping: 30,    // Aumenta para menos rebote (default: 20)
    stiffness: 80,  // Reduce para más lento (default: 100)
  },
});
```

**Para animaciones más dramáticas:**
```tsx
config: {
  damping: 10,     // Reduce para más rebote
  stiffness: 200,  // Aumenta para más rápido
}
```

## 🎬 Flujo de Trabajo Recomendado

1. **Iniciar el editor:** `npm start`
2. **Hacer cambios** en los archivos
3. **Ver en tiempo real** en el navegador
4. **Ajustar hasta que quede perfecto**
5. **Renderizar video final:** `npm run build`

## 💡 Tips Profesionales

- **Mantén la coherencia:** Usa los mismos colores y fuentes en todo el video
- **Menos es más:** No sobrecargues con información
- **Timing:** Deja tiempo para que el espectador lea los textos
- **Contraste:** Asegura que los textos sean legibles sobre los fondos
- **Audio:** Considera añadir música de fondo (ver docs de Remotion)

## 🆘 Solución de Problemas

**El video no se renderiza:**
```bash
# Limpia caché
rm -rf node_modules/.cache
npm start
```

**Errores de Tailwind:**
```bash
# Reinstala dependencias
npm install -D tailwindcss postcss autoprefixer
```

**Fuentes no se cargan:**
Verifica que el import en `src/style.css` esté correcto y que tengas conexión a internet.

---

**¿Necesitas más ayuda?** Consulta la [documentación oficial de Remotion](https://www.remotion.dev/docs)
