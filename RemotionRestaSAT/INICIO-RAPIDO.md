# 🚀 Inicio Rápido - RestaSAT Video Promocional

## ✅ Estado del Proyecto

**✓ Remotion instalado y configurado**  
**✓ Tailwind CSS integrado**  
**✓ 4 escenas completas programadas**  
**✓ Componentes reutilizables creados**  
**✓ Paleta de colores RestaSAT implementada**

---

## 🎬 Ver el Video AHORA

### Paso 1: Iniciar el Remotion Studio
```bash
npm start
```

Esto abrirá tu navegador en `http://localhost:3000` con el editor visual.

### Paso 2: Explorar las escenas
- Usa la barra de tiempo para navegar
- Click en play para ver el video completo
- Ajusta la calidad de preview si es necesario

---

## 📹 Renderizar Video Final

### Opción 1: Comando básico
```bash
npm run build
```
Genera: `out/restasat-promo.mp4`

### Opción 2: Con opciones avanzadas
```bash
# Alta calidad
npx remotion render RestaSATPromo out/promo-hq.mp4 --codec h264 --quality 95

# Para redes sociales (menor tamaño)
npx remotion render RestaSATPromo out/promo-social.mp4 --codec h264 --quality 80

# 60 FPS (más fluido)
npx remotion render RestaSATPromo out/promo-60fps.mp4 --override-fps 60
```

---

## 📂 Estructura del Video

```
🎬 RestaSATPromo (15 segundos)
├── 🎯 Escena 1 (0-3s)  → Logo + "Tu maquinaria siempre a punto"
├── 🔄 Escena 2 (3-8s)  → Slider de 3 servicios automático
├── 🎁 Escena 3 (8-12s) → PROMO -20% con animación spring
└── 📞 Escena 4 (12-15s) → CTA + www.restasat.com
```

---

## 🎨 Personalización Rápida

### Cambiar el descuento
📄 `src/components/DiscountBadge.tsx` línea 60
```tsx
<div className="text-7xl">-30%</div>  // Cambia aquí
```

### Modificar servicios
📄 `src/components/ServiceSlider.tsx` línea 10
```tsx
const services = [
  { title: 'Tu Nuevo Servicio', icon: '🔧' },
  // ...
];
```

### Cambiar colores
📄 `tailwind.config.js` línea 7
```js
'restasat-blue': '#TU_COLOR',
'restasat-orange': '#TU_COLOR',
```

### Añadir tu logo
1. Coloca `logo.png` en `public/img/`
2. Ver instrucciones en `PERSONALIZACION.md`

---

## 📚 Documentación Completa

- **README.md** → Guía completa del proyecto
- **COMPONENTS.md** → Documentación de componentes
- **PERSONALIZACION.md** → 10 cambios comunes explicados
- **public/img/README.md** → Cómo usar imágenes

---

## 🎯 Próximos Pasos

1. ✅ **Ejecuta `npm start`** para ver el video
2. 🎨 Personaliza colores y textos según tu marca
3. 📸 Añade tu logo real en `public/img/logo.png`
4. 🎬 Renderiza el video final con `npm run build`
5. 📱 ¡Comparte en redes sociales!

---

## 🛠️ Tecnología Utilizada

| Herramienta | Versión | Propósito |
|------------|---------|-----------|
| Remotion | 4.0.450 | Framework de videos |
| React | 19.2.5 | UI Components |
| TypeScript | 6.0.3 | Type Safety |
| Tailwind CSS | Latest | Estilos |
| Outfit Font | - | Display (títulos) |
| Inter Font | - | Body (textos) |

---

## 💡 Tips de Rendimiento

- **Preview:** Usa calidad baja mientras editas
- **Render:** Usa calidad alta para el video final
- **Caché:** Si hay problemas, borra `node_modules/.cache`

---

## 🆘 Problemas Comunes

### El servidor no inicia
```bash
# Verifica que el puerto 3000 esté libre
npx kill-port 3000
npm start
```

### Errores de TypeScript
```bash
# Limpia y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Video no se renderiza
```bash
# Verifica la configuración
cat remotion.config.ts
```

---

## 📞 Soporte

- [Documentación Remotion](https://www.remotion.dev/docs)
- [Discord de Remotion](https://remotion.dev/discord)
- [GitHub Issues](https://github.com/remotion-dev/remotion/issues)

---

**¡Tu video promocional de RestaSAT está listo para brillar! 🌟**

Ejecuta `npm start` y comienza a crear.
