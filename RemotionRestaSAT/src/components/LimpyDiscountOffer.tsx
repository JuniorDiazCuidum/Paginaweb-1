import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Percent, Tag } from 'lucide-react';

interface DiscountOfferProps {
  discount: string;
  description: string;
  subtitle: string;
  primaryColor: string;
}

export const LimpyDiscountOffer: React.FC<DiscountOfferProps> = ({
  discount,
  description,
  subtitle,
  primaryColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación spring de entrada
  const entryScale = spring({
    frame,
    fps,
    config: {
      damping: 12,
      stiffness: 180,
      mass: 0.6,
    },
  });

  // Pulso constante más sutil (profesional)
  const heartbeat = interpolate(
    Math.sin((frame / 20) * Math.PI),
    [-1, 1],
    [0.98, 1.02]
  );

  // Rotación muy sutil
  const rotation = interpolate(
    Math.sin((frame / 40) * Math.PI),
    [-1, 1],
    [-1, 1]
  );

  // Resplandor pulsante
  const glowOpacity = interpolate(
    Math.sin((frame / 25) * Math.PI),
    [-1, 1],
    [0.2, 0.5]
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-12">
      {/* Círculos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${180 + i * 100}px`,
              height: `${180 + i * 100}px`,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${interpolate(
                frame,
                [0, 40],
                [0.9 + i * 0.08, 1 + i * 0.08],
                { extrapolateRight: 'clamp' }
              )})`,
              backgroundColor: '#ffffff',
              opacity: 0.08 - i * 0.015,
            }}
          />
        ))}
      </div>

      {/* Contenedor principal */}
      <div
        className="relative z-10"
        style={{
          transform: `scale(${entryScale * heartbeat}) rotate(${rotation}deg)`,
        }}
      >
        {/* Resplandor de fondo */}
        <div
          className="absolute inset-0 rounded-[3.5rem] blur-3xl"
          style={{
            backgroundColor: primaryColor,
            opacity: glowOpacity,
            transform: 'scale(1.15)',
          }}
        />

        {/* Badge principal de descuento */}
        <div
          className="relative bg-white rounded-[3.5rem] shadow-2xl p-16 border-8"
          style={{
            borderColor: primaryColor,
          }}
        >
          {/* Icono de porcentaje flotante */}
          <div
            className="absolute -top-6 -right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
            style={{
              backgroundColor: primaryColor,
              transform: `rotate(${interpolate(frame, [0, 60], [0, 360])}deg)`,
            }}
          >
            <Percent size={32} color="#ffffff" strokeWidth={3} />
          </div>

          {/* Contenido del descuento */}
          <div className="text-center">
            <div
              className="text-9xl font-display font-black leading-none mb-3"
              style={{ color: primaryColor }}
            >
              {discount}
            </div>
            <div className="text-gray-700 text-4xl font-display font-bold uppercase tracking-wide">
              {description}
            </div>
          </div>
        </div>
      </div>

      {/* Texto descriptivo */}
      <div
        className="relative z-10 mt-16 text-center"
        style={{
          opacity: interpolate(frame, [15, 25], [0, 1], {
            extrapolateRight: 'clamp',
          }),
          transform: `translateY(${interpolate(
            frame,
            [15, 25],
            [30, 0],
            { extrapolateRight: 'clamp' }
          )}px)`,
        }}
      >
        <div className="text-white text-5xl font-display font-bold leading-tight mb-6">
          {subtitle}
        </div>

        {/* Línea decorativa */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-20 h-1 bg-white/50 rounded-full" />
          <Tag size={32} color="#ffffff" strokeWidth={2} />
          <div className="w-20 h-1 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Badge de "Oferta Limitada" */}
      <div
        className="absolute bottom-28 bg-white px-10 py-4 rounded-full shadow-xl"
        style={{
          transform: `translateY(${interpolate(
            frame,
            [25, 35],
            [60, 0],
            { extrapolateRight: 'clamp' }
          )}px)`,
          opacity: interpolate(frame, [25, 35], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <span
          className="text-2xl font-body font-bold uppercase tracking-wide"
          style={{ color: primaryColor }}
        >
          Oferta Limitada
        </span>
      </div>
    </div>
  );
};
