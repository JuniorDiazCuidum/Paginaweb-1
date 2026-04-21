import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Sparkles, Shield, Clock } from 'lucide-react';

interface LimpyService {
  id: number;
  title: string;
  badge: string;
  description: string;
  imageName: string;
}

interface ServiceSliderProps {
  services: LimpyService[];
  primaryColor: string;
}

export const LimpyServiceSlider: React.FC<ServiceSliderProps> = ({
  services,
  primaryColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración de cada servicio en pantalla (1.5s cada uno)
  const serviceDuration = fps * 1.5;
  const currentIndex = Math.floor(frame / serviceDuration) % services.length;
  const currentService = services[currentIndex];

  // Frame local del servicio actual
  const localFrame = frame % serviceDuration;

  // Animación de entrada para cada nuevo servicio
  const slideIn = spring({
    frame: localFrame,
    fps,
    config: {
      damping: 20,
      stiffness: 90,
    },
  });

  const opacity = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Seleccionar icono según el servicio
  const getServiceIcon = (index: number) => {
    const icons = [Sparkles, Shield, Clock];
    const Icon = icons[index % icons.length];
    return Icon;
  };

  const ServiceIcon = getServiceIcon(currentIndex);

  return (
    <div className="w-full px-8">
      {/* Tarjeta del servicio */}
      <div
        className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        style={{
          transform: `scale(${interpolate(slideIn, [0, 1], [0.92, 1])})`,
          opacity,
        }}
      >
        {/* Área de contenido (sin imagen de fondo) */}
        <div className="p-10">
          {/* Badge del servicio */}
          <div
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-body font-semibold mb-6"
            style={{
              backgroundColor: `${primaryColor}15`,
              color: primaryColor,
            }}
          >
            {currentService.badge}
          </div>

          {/* Icono del servicio */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
            style={{
              backgroundColor: `${primaryColor}20`,
              transform: `scale(${slideIn})`,
            }}
          >
            <ServiceIcon
              size={40}
              strokeWidth={2}
              style={{ color: primaryColor }}
            />
          </div>

          {/* Título */}
          <h3
            className="text-4xl font-display font-bold mb-4"
            style={{
              color: '#1a1a1a',
              transform: `translateY(${interpolate(slideIn, [0, 1], [20, 0])}px)`,
              opacity,
            }}
          >
            {currentService.title}
          </h3>

          {/* Descripción */}
          <p
            className="text-xl font-body text-gray-600 leading-relaxed"
            style={{
              transform: `translateY(${interpolate(slideIn, [0, 1], [20, 0])}px)`,
              opacity,
            }}
          >
            {currentService.description}
          </p>

          {/* Línea decorativa */}
          <div
            className="mt-6 h-1.5 rounded-full"
            style={{
              backgroundColor: primaryColor,
              width: `${interpolate(slideIn, [0, 1], [0, 100])}%`,
            }}
          />
        </div>

        {/* Barra inferior con efecto de color */}
        <div
          className="h-3"
          style={{
            backgroundColor: primaryColor,
            opacity: 0.8,
          }}
        />
      </div>

      {/* Indicadores de progreso */}
      <div className="flex justify-center space-x-3 mt-8">
        {services.map((_, index) => (
          <div
            key={index}
            className="rounded-full transition-all"
            style={{
              width: index === currentIndex ? '48px' : '12px',
              height: '12px',
              backgroundColor:
                index === currentIndex ? primaryColor : '#E5E7EB',
            }}
          />
        ))}
      </div>
    </div>
  );
};
