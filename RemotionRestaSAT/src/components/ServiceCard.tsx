import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { staticFile } from 'remotion';

interface ServiceCardProps {
  title: string;
  imageName: string; // Nombre del archivo .webp en la carpeta img/
  index: number;
  currentIndex: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageName,
  index,
  currentIndex,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calcular si esta tarjeta es la activa
  const isActive = index === currentIndex;

  // Animación de entrada para la tarjeta activa
  const cardProgress = spring({
    frame: frame - (index * 15),
    fps,
    config: {
      damping: 20,
      stiffness: 80,
    },
  });

  // Escala y opacidad según si está activa
  const scale = isActive ? interpolate(
    cardProgress,
    [0, 1],
    [0.9, 1],
    { extrapolateRight: 'clamp' }
  ) : 0.85;

  const opacity = isActive ? 1 : 0.6;

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl"
      style={{
        width: '100%',
        height: '450px',
        transform: `scale(${scale})`,
        opacity,
        transition: 'all 0.5s ease-out',
      }}
    >
      {/* Imagen de fondo - REEMPLAZA 'imageName' con tus archivos .webp reales */}
      <AbsoluteFill>
        <Img
          src={staticFile(`img/${imageName}`)}
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </AbsoluteFill>

      {/* Contenido de la tarjeta */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        {/* Icono decorativo */}
        <div className="mb-4">
          <div className="w-16 h-16 bg-restasat-orange rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl">⚙️</span>
          </div>
        </div>

        {/* Título del servicio */}
        <h3 className="text-4xl font-display font-black text-white leading-tight mb-2">
          {title}
        </h3>

        {/* Línea decorativa */}
        <div className="w-24 h-1.5 bg-restasat-orange rounded-full" />
      </div>

      {/* Badge de "Servicio Oficial" */}
      {isActive && (
        <div
          className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          style={{
            transform: `scale(${cardProgress})`,
          }}
        >
          <span className="text-sm font-display font-bold text-restasat-blue">
            ✓ Servicio Oficial
          </span>
        </div>
      )}
    </div>
  );
};
