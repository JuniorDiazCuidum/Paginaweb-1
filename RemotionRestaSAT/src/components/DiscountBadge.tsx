import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const DiscountBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación de escala con spring
  const scale = spring({
    frame: frame - 5,
    fps,
    config: {
      damping: 10,
      stiffness: 200,
      mass: 0.5,
    },
  });

  // Animación de pulso continuo
  const pulse = interpolate(
    frame % 30,
    [0, 15, 30],
    [1, 1.05, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  // Rotación sutil
  const rotation = interpolate(
    frame,
    [0, 20],
    [-5, 5],
    {
      extrapolateRight: 'clamp',
    }
  );

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      className="relative"
      style={{
        transform: `scale(${scale * pulse}) rotate(${rotation}deg)`,
        opacity,
      }}
    >
      {/* Badge principal */}
      <div className="relative">
        {/* Resplandor de fondo */}
        <div className="absolute inset-0 bg-restasat-orange blur-3xl opacity-60 rounded-full scale-110" />
        
        {/* Badge */}
        <div className="relative bg-gradient-to-br from-restasat-orange to-orange-600 px-16 py-12 rounded-3xl shadow-2xl border-4 border-white">
          <div className="text-center">
            <div className="text-white text-7xl font-display font-black leading-none mb-2">
              -20%
            </div>
            <div className="text-white text-2xl font-display font-semibold uppercase tracking-wider">
              DESCUENTO
            </div>
          </div>
        </div>

        {/* Detalles decorativos */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-3xl">⚡</span>
        </div>
      </div>
    </div>
  );
};
