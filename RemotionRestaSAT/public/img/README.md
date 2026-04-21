# Assets de RestaSAT

## Logo

Coloca tu logo de RestaSAT aquí:
- **Nombre:** `logo.png` 
- **Formato:** PNG con fondo transparente (recomendado)
- **Tamaño:** 500x500px o superior
- **Ubicación:** `/public/img/logo.png`

## Cómo usar el logo en el video

Actualmente, Scene1 usa texto para el logo. Para usar una imagen:

```tsx
import { Img } from 'remotion';

// En Scene1:
<Img 
  src="img/logo.png" 
  className="w-80 h-80 object-contain"
  style={{
    transform: `scale(${logoScale})`,
  }}
/>
```

## Otros assets

Puedes añadir más imágenes aquí para usar en el video:
- Iconos de servicios
- Fotos de maquinaria
- Certificaciones
- Etc.

**Nota:** Remotion accede a los archivos desde la carpeta `public/` automáticamente.
