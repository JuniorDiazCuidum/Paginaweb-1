import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const DiscountBanner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación spring de entrada
  const entryScale = spring({
    frame,
    fps,
    config: {
      damping: 12,
      stiffness: 200,
      mass: 0.5,
    },
  });

  // Pulso constante (latido) para el descuento
  const heartbeatScale = interpolate(
    Math.sin((frame / 15) * Math.PI),
    [-1, 1],
    [0.95, 1.08]
  );

  // Rotación sutil
  const rotation = interpolate(
    frame,
    [0, 30, 60],
    [-2, 2, -2],
    { extrapolateRight: 'clamp' }
  );

  // Brillo animado
  const glowIntensity = interpolate(
    Math.sin((frame / 20) * Math.PI),
    [-1, 1],
    [0.3, 0.8]
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
      {/* Círculos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${interpolate(
                frame,
                [0, 60],
                [0.8 + i * 0.1, 1 + i * 0.1],
                { extrapolateRight: 'clamp' }
              )})`,
              opacity: 0.2 - i * 0.03,
            }}
          />
        ))}
      </div>

      {/* Contenedor principal del descuento */}
      <div
        className="relative z-10"
        style={{
          transform: `scale(${entryScale * heartbeatScale}) rotate(${rotation}deg)`,
        }}
      >
        {/* Resplandor animado */}
        <div
          className="absolute inset-0 bg-yellow-300 rounded-full blur-3xl"
          style={{
            opacity: glowIntensity,
            transform: 'scale(1.2)',
          }}
        />

        {/* Badge principal */}
        <div className="relative bg-white rounded-[3rem] shadow-2xl p-12 border-8 border-restasat-orange">
          {/* Texto del descuento */}
          <div className="text-center">
            <div className="text-restasat-orange text-8xl font-display font-black leading-none mb-3">
              -20%
            </div>
            <div className="text-gray-800 text-3xl font-display font-bold uppercase tracking-wide">
              DTO.
            </div>
          </div>
        </div>

        {/* Destellos decorativos */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <div
            key={angle}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${angle}deg) translateY(-140px) scale(${interpolate(
                (frame + i * 5) % 30,
                [0, 15, 30],
                [0, 1, 0]
              )})`,
              opacity: interpolate(
                (frame + i * 5) % 30,
                [0, 15, 30],
                [0, 1, 0]
              ),
            }}
          />
        ))}
      </div>

      {/* Texto descriptivo */}
      <div
        className="relative z-10 mt-12 text-center"
        style={{
          opacity: interpolate(frame, [10, 20], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <div className="text-white text-5xl font-display font-black leading-tight mb-4">
          EN TU PRIMER
          <br />
          SERVICIO
        </div>

        {/* Iconos decorativos */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="w-20 h-1.5 bg-white/50 rounded-full" />
          <span className="text-4xl">🎉</span>
          <div className="w-20 h-1.5 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Etiqueta "Oferta Limitada" */}
      <div
        className="absolute bottom-32 bg-yellow-400 text-restasat-blue px-8 py-3 rounded-full shadow-xl"
        style={{
          transform: `translateY(${interpolate(
            frame,
            [20, 30],
            [50, 0],
            { extrapolateRight: 'clamp' }
          )}px)`,
          opacity: interpolate(frame, [20, 30], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <span className="text-2xl font-display font-bold uppercase tracking-wide">
          ⏱️ Oferta Limitada
        </span>
      </div>
    </div>
  );
};
