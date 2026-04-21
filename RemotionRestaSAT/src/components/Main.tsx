import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from 'remotion';
import { ServiceCard } from './ServiceCard';
import { DiscountBanner } from './DiscountBanner';
import '../style.css';

export const RestaSATVertical: React.FC = () => {
  return (
    <AbsoluteFill className="bg-white">
      {/* Escena 1: Logo y Texto Inicial (0-3s = 0-90 frames) */}
      <Sequence from={0} durationInFrames={90}>
        <Scene1Intro />
      </Sequence>

      {/* Escena 2: Slider de Servicios (3-8s = 90-240 frames) */}
      <Sequence from={90} durationInFrames={150}>
        <Scene2Services />
      </Sequence>

      {/* Escena 3: Banner de Descuento (8-12s = 240-360 frames) */}
      <Sequence from={240} durationInFrames={120}>
        <Scene3Discount />
      </Sequence>

      {/* Escena 4: CTA y Cierre (12-15s = 360-450 frames) */}
      <Sequence from={360} durationInFrames={90}>
        <Scene4CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 1: LOGO Y TEXTO INICIAL (0-3s)
// =============================================================================
const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del logo
  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 18,
      stiffness: 90,
    },
  });

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación del texto
  const textY = interpolate(frame, [30, 50], [80, 0], {
    extrapolateRight: 'clamp',
  });

  const textOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-gradient-to-br from-restasat-blue via-blue-700 to-blue-900 px-12">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,.05) 40px, rgba(255,255,255,.05) 80px)',
          }}
        />
      </div>

      {/* Logo - REEMPLAZA con tu favicon.ico o logo.webp */}
      <div
        className="relative z-10 mb-16"
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      >
        <div className="bg-white rounded-[3rem] shadow-2xl p-12 border-4 border-restasat-orange">
          {/* Opción 1: Usar imagen del logo */}
          {/* <Img
            src={staticFile('img/logo.webp')}
            className="w-64 h-64 object-contain"
          /> */}
          
          {/* Opción 2: Texto (placeholder) */}
          <div className="text-7xl font-display font-black text-restasat-blue text-center leading-none">
            RestaSAT
          </div>
        </div>

        {/* Resplandor detrás del logo */}
        <div className="absolute inset-0 bg-restasat-orange/30 rounded-[3rem] blur-3xl -z-10 scale-110" />
      </div>

      {/* Texto principal */}
      <div
        className="relative z-10 text-center px-8"
        style={{
          transform: `translateY(${textY}px)`,
          opacity: textOpacity,
        }}
      >
        <h1 className="text-5xl font-display font-black text-white leading-tight mb-6">
          Reparación Urgente
          <br />
          de Maquinaria
          <br />
          <span className="text-restasat-orange">Hostelería</span>
        </h1>

        {/* Líneas decorativas */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <div className="w-20 h-1.5 bg-restasat-orange rounded-full" />
          <span className="text-3xl">⚡</span>
          <div className="w-20 h-1.5 bg-restasat-orange rounded-full" />
        </div>

        {/* Subtítulo */}
        <p className="text-2xl font-body text-white/90 mt-8 font-medium">
          Valencia · Servicio 24/7
        </p>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 2: SLIDER DE SERVICIOS (3-8s)
// =============================================================================
const Scene2Services: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Lista de servicios - REEMPLAZA los nombres de archivo con tus .webp reales
  const services = [
    { title: 'Frío Industrial', image: 'servicio-frio.webp' },
    { title: 'Cocinas Profesionales', image: 'servicio-cocinas.webp' },
    { title: 'Maquinaria de Lavado', image: 'servicio-lavado.webp' },
  ];

  // Duración de cada servicio en pantalla
  const serviceDuration = 45; // frames (1.5 segundos a 30fps)
  const currentIndex = Math.floor(frame / serviceDuration) % services.length;

  // Fade in general
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-gray-900 via-gray-800 to-restasat-blue/90 flex flex-col justify-between px-8 py-16">
      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Título de la sección */}
      <div
        className="relative z-10 text-center"
        style={{ opacity: fadeIn }}
      >
        <h2 className="text-5xl font-display font-black text-white mb-3">
          Nuestros Servicios
        </h2>
        <div className="w-32 h-1.5 bg-restasat-orange rounded-full mx-auto" />
      </div>

      {/* Tarjetas de servicio */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center px-4"
        style={{ opacity: fadeIn }}
      >
        <div className="w-full max-w-xl">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                display: index === currentIndex ? 'block' : 'none',
              }}
            >
              <ServiceCard
                title={service.title}
                imageName={service.image}
                index={index}
                currentIndex={currentIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de progreso */}
      <div
        className="relative z-10 flex justify-center space-x-3"
        style={{ opacity: fadeIn }}
      >
        {services.map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'w-16 h-3 bg-restasat-orange'
                : 'w-3 h-3 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Badge inferior */}
      <div
        className="relative z-10 mt-8 flex justify-center"
        style={{ opacity: fadeIn }}
      >
        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          <p className="text-xl font-body font-semibold text-white text-center">
            ⚙️ Técnicos Certificados
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 3: BANNER DE DESCUENTO (8-12s)
// =============================================================================
const Scene3Discount: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-restasat-orange via-orange-600 to-red-600">
      <div style={{ opacity: fadeIn }}>
        <DiscountBanner />
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 4: CTA Y CIERRE (12-15s)
// =============================================================================
const Scene4CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación del botón
  const buttonScale = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 15,
      stiffness: 120,
    },
  });

  // Pulso del botón
  const pulse = interpolate((frame - 20) % 40, [0, 20, 40], [1, 1.05, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-restasat-blue via-blue-800 to-gray-900 flex flex-col items-center justify-center px-12">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div
        className="relative z-10 flex flex-col items-center space-y-12 text-center"
        style={{ opacity: fadeIn }}
      >
        {/* Título */}
        <h2 className="text-6xl font-display font-black text-white leading-tight">
          ¿Necesitas
          <br />
          <span className="text-restasat-orange">Asistencia?</span>
        </h2>

        {/* Botón CTA principal */}
        <button
          className="bg-restasat-orange text-white font-display font-black text-4xl px-16 py-8 rounded-3xl shadow-2xl border-4 border-white/20 relative overflow-hidden"
          style={{
            transform: `scale(${buttonScale * pulse})`,
          }}
        >
          {/* Brillo animado */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              transform: `translateX(${interpolate(
                frame,
                [20, 60],
                [-200, 400]
              )}%)`,
            }}
          />
          <span className="relative z-10">Solicitar Presupuesto</span>
        </button>

        {/* URL */}
        <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-full border border-white/20 flex items-center space-x-4">
          <span className="text-4xl">🌐</span>
          <span className="text-3xl font-body font-bold text-white">
            www.restasat.com
          </span>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col items-center space-y-4 mt-8">
          <div className="flex items-center space-x-3 text-white/90">
            <span className="text-3xl">📍</span>
            <span className="text-2xl font-body font-medium">Valencia</span>
          </div>
          <div className="flex items-center space-x-3 text-white/90">
            <span className="text-3xl">⏰</span>
            <span className="text-2xl font-body font-medium">
              Servicio 24/7
            </span>
          </div>
        </div>

        {/* Logo pequeño al final */}
        <div className="mt-8 opacity-80">
          <div className="text-4xl font-display font-black text-white">
            RestaSAT
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
