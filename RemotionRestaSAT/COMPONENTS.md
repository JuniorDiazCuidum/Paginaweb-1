# Guía de Componentes RestaSAT

## ServiceSlider.tsx

**Propósito:** Slider automático que muestra los servicios principales de RestaSAT.

**Características:**
- Transición automática cada 1.5 segundos
- 3 servicios con iconos animados
- Animaciones spring para entrada suave
- Indicadores de progreso visual

**Uso:**
```tsx
import { ServiceSlider } from './components/ServiceSlider';

<ServiceSlider />
```

**Personalización:**
```tsx
// Cambiar servicios
const services: Service[] = [
  { title: 'Nuevo Servicio', icon: '🔧' },
  // ...
];

// Ajustar duración
const serviceDuration = fps * 2; // 2 segundos por servicio
```

---

## DiscountBadge.tsx

**Propósito:** Badge animado para promociones y descuentos.

**Características:**
- Animación spring dramática de entrada
- Pulso continuo para captar atención
- Resplandor de fondo
- Icono decorativo

**Uso:**
```tsx
import { DiscountBadge } from './components/DiscountBadge';

<DiscountBadge />
```

**Personalización:**
```tsx
// Cambiar el descuento
<div className="text-7xl">-30%</div>

// Ajustar el pulso
const pulse = interpolate(
  frame % 20, // Más rápido
  [0, 10, 20],
  [1, 1.1, 1] // Más intenso
);
```

---

## Composition.tsx (RestaSATPromo)

**Propósito:** Composición principal que organiza todas las escenas.

**Estructura:**
```tsx
<AbsoluteFill>
  <Sequence from={0} durationInFrames={90}>Scene1</Sequence>
  <Sequence from={90} durationInFrames={150}>Scene2</Sequence>
  <Sequence from={240} durationInFrames={120}>Scene3</Sequence>
  <Sequence from={360} durationInFrames={90}>Scene4</Sequence>
</AbsoluteFill>
```

**Tiempos:**
- Scene1: 0-3s (frames 0-90)
- Scene2: 3-8s (frames 90-240)
- Scene3: 8-12s (frames 240-360)
- Scene4: 12-15s (frames 360-450)

**Ajustar tiempos:**
```tsx
// Para cambiar la duración de una escena
<Sequence from={0} durationInFrames={120}> // 4 segundos
```

---

## Escenas Individuales

### Scene1 - Logo y Gancho
**Elementos:**
- Logo RestaSAT con animación spring
- Texto "Tu maquinaria siempre a punto"
- Patrón de fondo industrial

### Scene2 - Servicios
**Elementos:**
- ServiceSlider component
- Texto "Servicio Técnico Oficial en Valencia"
- Grid de fondo sutil

### Scene3 - Promoción
**Elementos:**
- DiscountBadge component
- Título "PROMO EXCLUSIVA"
- Efectos de rayos radiantes
- Texto "EN TU PRIMER AVISO"

### Scene4 - Call-to-Action
**Elementos:**
- Botón "Solicitar Presupuesto" animado
- Website www.restasat.com
- Iconos de contacto

---

## Tips de Animación

### Spring (Movimientos naturales)
```tsx
const scale = spring({
  frame: frame - delay,
  fps,
  config: {
    damping: 20,    // Más alto = menos rebote
    stiffness: 100, // Más alto = más rápido
  },
});
```

### Interpolate (Transiciones lineales)
```tsx
const opacity = interpolate(
  frame,
  [start, end],
  [0, 1],
  { extrapolateRight: 'clamp' }
);
```

### Combinar animaciones
```tsx
style={{
  transform: `scale(${spring}) translateY(${interpolate}px)`,
  opacity: fadeIn,
}}
```
