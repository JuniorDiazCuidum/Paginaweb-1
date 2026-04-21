import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface Service {
  title: string;
  icon: string;
}

const services: Service[] = [
  { title: 'Reparación de Hornos y Cocinas', icon: '🔥' },
  { title: 'Mantenimiento de Frío Industrial', icon: '❄️' },
  { title: 'Lavavajillas y Maquinaria de Lavado', icon: '💧' },
];

export const ServiceSlider: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cada servicio aparece durante 1.5 segundos aprox
  const serviceDuration = fps * 1.5;
  const currentServiceIndex = Math.floor(frame / serviceDuration) % services.length;
  const currentService = services[currentServiceIndex];

  // Animación de entrada para cada nuevo servicio
  const serviceFrame = frame % serviceDuration;
  const slideIn = spring({
    frame: serviceFrame,
    fps,
    config: {
      damping: 20,
      stiffness: 100,
    },
  });

  const opacity = interpolate(serviceFrame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Icono del servicio */}
      <div
        className="text-8xl"
        style={{
          transform: `scale(${slideIn})`,
          opacity,
        }}
      >
        {currentService.icon}
      </div>

      {/* Título del servicio */}
      <div
        className="text-4xl font-display font-bold text-white text-center px-12 leading-tight"
        style={{
          transform: `translateY(${interpolate(slideIn, [0, 1], [30, 0])}px)`,
          opacity,
        }}
      >
        {currentService.title}
      </div>

      {/* Indicadores */}
      <div className="flex space-x-3 mt-4">
        {services.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentServiceIndex
                ? 'w-12 bg-restasat-orange'
                : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
