# Videos Promocionales con Remotion

Este proyecto contiene videos promocionales para dos marcas:
- **RestaSAT** - Servicio técnico de hostelería
- **Limpy** - Servicio de limpieza profesional a domicilio

## 🎬 Videos Disponibles

### 1. RestaSAT
- **RestaSATPromo** - Horizontal (1920x1080) - Video promocional horizontal
- **RestaSATVertical** - Vertical (1080x1920) - Video para redes sociales

### 2. Limpy
- **LimpyVertical** - Vertical (1080x1920) - Video móvil generado desde HTML

---

## 🚀 Inicio Rápido

### Ver todos los videos
```bash
npm start
```
Esto abrirá Remotion Studio en `http://localhost:3000`. Selecciona el video que quieras ver en el dropdown.

### Renderizar videos

**RestaSAT (horizontal):**
```bash
npm run build
```

**Limpy (vertical):**
```bash
npm run build:limpy
```

**Manual (cualquier video):**
```bash
npx remotion render [NombreVideo] out/[nombre-archivo].mp4
```

---

## 📂 Estructura del Proyecto

```
RemotionRestaSAT/
├── src/
│   ├── components/
│   │   ├── Main.tsx                    # RestaSAT Vertical
│   │   ├── ServiceCard.tsx             # RestaSAT Service Cards
│   │   ├── DiscountBadge.tsx           # RestaSAT Discount
│   │   ├── ServiceSlider.tsx           # RestaSAT Slider
│   │   ├── LimpyVertical.tsx           # ✨ Limpy Video Principal
│   │   ├── LimpyServiceSlider.tsx      # ✨ Limpy Slider
│   │   └── LimpyDiscountOffer.tsx      # ✨ Limpy Oferta
│   ├── data/
│   │   └── limpyData.ts                # ✨ Datos extraídos del HTML
│   ├── Composition.tsx                 # RestaSAT Horizontal
│   ├── Root.tsx                        # Registro de composiciones
│   ├── index.ts                        # Punto de entrada
│   └── style.css                       # Estilos Tailwind
├── public/
│   └── img/
│       └── pagina/
│           └── index.html              # HTML fuente de Limpy
├── remotion.config.ts                  # Configuración de Remotion
├── tailwind.config.js                  # Configuración de Tailwind
└── package.json                        # Dependencias y scripts
```

---

## 🎨 Video de Limpy - Características Especiales

El video de Limpy se genera **automáticamente** extrayendo datos del HTML ubicado en `public/img/pagina/index.html`.

### Datos Extraídos:
- ✅ Logo de Limpy
- ✅ Servicios (Limpieza Profunda, Regular, Ecológica)
- ✅ Paleta de colores (#A1B318, #6366F1)
- ✅ Fuentes (Playfair Display, DM Sans)
- ✅ URL del sitio (limpy.gestoriaencasa.es)

### Estilo:
- ✨ Profesional y minimalista
- 🚫 Sin emojis (solo iconos SVG de lucide-react)
- 📱 Formato vertical optimizado para móvil

**Documentación completa:** Ver [LIMPY-VIDEO.md](LIMPY-VIDEO.md)

---

## 🎨 RestaSAT - Características

### Paleta de Colores
- **Azul Profesional:** `#0056b3`
- **Naranja de Contraste:** `#FF6B35`

### Estructura (15 segundos)
1. **0-3s:** Logo y gancho
2. **3-8s:** Slider de servicios
3. **8-12s:** Promo -20%
4. **12-15s:** Call-to-action

**Documentación completa:** Ver [PERSONALIZACION.md](PERSONALIZACION.md)

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Remotion | 4.0.450 | Framework de videos |
| React | 19.2.5 | UI Components |
| TypeScript | 6.0.3 | Type Safety |
| Tailwind CSS | 3.4.17 | Estilos |
| Lucide React | Latest | Iconos SVG (Limpy) |

---

## 📝 Scripts Disponibles

```bash
npm start              # Iniciar Remotion Studio
npm run build          # Renderizar RestaSAT horizontal
npm run build:limpy    # Renderizar Limpy vertical
```

---

## 🎓 Documentación Adicional

- **[INICIO-RAPIDO.md](INICIO-RAPIDO.md)** - Guía de inicio rápido para RestaSAT
- **[PERSONALIZACION.md](PERSONALIZACION.md)** - 10 cambios comunes en RestaSAT
- **[COMPONENTS.md](COMPONENTS.md)** - Documentación de componentes de RestaSAT
- **[LIMPY-VIDEO.md](LIMPY-VIDEO.md)** - Guía completa del video de Limpy

---

## 🔄 Actualizar Datos de Limpy

Si modificas el archivo `public/img/pagina/index.html` de Limpy:

1. Abre `src/data/limpyData.ts`
2. Actualiza los valores según el nuevo HTML
3. Guarda y reinicia `npm start`

---

## 🆘 Solución de Problemas

### El servidor no inicia
```bash
npx kill-port 3000
npm start
```

### Errores de compilación
```bash
rm -rf node_modules package-lock.json
npm install
```

### Videos no se renderizan
Verifica que las composiciones estén registradas en `src/Root.tsx`

---

## 📦 Instalación

```bash
# Clonar e instalar
npm install

# Iniciar el editor
npm start

# Renderizar videos
npm run build
npm run build:limpy
```

---

## 📞 Recursos

- [Documentación de Remotion](https://www.remotion.dev/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Discord de Remotion](https://remotion.dev/discord)

---

**Desarrollado con ❤️ usando Remotion, React y TypeScript**
