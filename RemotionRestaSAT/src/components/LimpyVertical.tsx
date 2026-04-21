import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { LimpyServiceSlider } from './LimpyServiceSlider';
import { LimpyDiscountOffer } from './LimpyDiscountOffer';
import { limpyData } from '../data/limpyData';
import { Home, Calendar, Globe } from 'lucide-react';
import '../style.css';

export const LimpyVertical: React.FC = () => {
  return (
    <AbsoluteFill className="bg-white">
      {/* Escena 1: Logo y Texto Inicial (0-4s = 0-120 frames) */}
      <Sequence from={0} durationInFrames={120}>
        <Scene1Logo />
      </Sequence>

      {/* Escena 2: Slider de Servicios (4-9s = 120-270 frames) */}
      <Sequence from={120} durationInFrames={150}>
        <Scene2Services />
      </Sequence>

      {/* Escena 3: Oferta de Descuento (9-13s = 270-390 frames) */}
      <Sequence from={270} durationInFrames={120}>
        <Scene3Offer />
      </Sequence>

      {/* Escena 4: Call to Action (13-15s = 390-450 frames) */}
      <Sequence from={390} durationInFrames={60}>
        <Scene4CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 1: LOGO Y ENTRADA (0-4s)
// =============================================================================
const Scene1Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del logo
  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 18,
      stiffness: 85,
    },
  });

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación del texto
  const textY = interpolate(frame, [35, 55], [80, 0], {
    extrapolateRight: 'clamp',
  });

  const textOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación del tagline
  const taglineOpacity = interpolate(frame, [60, 75], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      className="flex flex-col items-center justify-center px-12"
      style={{
        background: `linear-gradient(135deg, ${limpyData.colors.primary} 0%, ${limpyData.colors.secondary} 100%)`,
      }}
    >
      {/* Patrón decorativo de fondo */}
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

      {/* Logo de Limpy */}
      <div
        className="relative z-10 mb-12"
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      >
        <div className="bg-white rounded-[3rem] shadow-2xl p-12">
          {/* Logo extraído del HTML */}
          <Img
            src={limpyData.brand.logoUrl}
            className="w-56 h-56 object-contain"
          />
        </div>

        {/* Resplandor detrás del logo */}
        <div
          className="absolute inset-0 rounded-[3rem] blur-3xl -z-10 scale-110"
          style={{
            backgroundColor: limpyData.colors.primary,
            opacity: 0.3,
          }}
        />
      </div>

      {/* Texto principal */}
      <div
        className="relative z-10 text-center px-8"
        style={{
          transform: `translateY(${textY}px)`,
          opacity: textOpacity,
        }}
      >
        <h1 className="text-5xl font-display font-bold text-white leading-tight mb-3">
          Servicios de limpieza
        </h1>
        <h2 className="text-5xl font-display font-bold text-white leading-tight mb-6">
          profesional a domicilio
        </h2>

        {/* Icono decorativo */}
        <div className="flex items-center justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <Home size={32} color="#ffffff" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Tagline inferior */}
      <div
        className="absolute bottom-28 text-center px-8"
        style={{ opacity: taglineOpacity }}
      >
        <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
          <p className="text-2xl font-body font-semibold text-white">
            {limpyData.brand.tagline}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 2: SLIDER DE SERVICIOS (4-9s)
// =============================================================================
const Scene2Services: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      className="flex flex-col justify-between py-20"
      style={{
        background: `linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%)`,
      }}
    >
      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Título de la sección */}
      <div
        className="relative z-10 text-center px-8"
        style={{ opacity: fadeIn }}
      >
        <h2
          className="text-5xl font-display font-bold mb-3"
          style={{ color: limpyData.colors.primary }}
        >
          Nuestros Servicios
        </h2>
        <div
          className="w-32 h-1.5 rounded-full mx-auto"
          style={{ backgroundColor: limpyData.colors.primary }}
        />
      </div>

      {/* Slider de servicios */}
      <div
        className="relative z-10 flex-1 flex items-center"
        style={{ opacity: fadeIn }}
      >
        <LimpyServiceSlider
          services={limpyData.services}
          primaryColor={limpyData.colors.primary}
        />
      </div>

      {/* Badge inferior */}
      <div
        className="relative z-10 flex justify-center px-8"
        style={{ opacity: fadeIn }}
      >
        <div className="bg-white rounded-full shadow-lg px-8 py-4 flex items-center space-x-3">
          <Calendar
            size={28}
            color={limpyData.colors.primary}
            strokeWidth={2}
          />
          <p
            className="text-xl font-body font-semibold"
            style={{ color: limpyData.colors.primary }}
          >
            Reserva en minutos
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 3: OFERTA DE DESCUENTO (9-13s)
// =============================================================================
const Scene3Offer: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${limpyData.colors.primary} 0%, ${limpyData.colors.secondary} 50%, ${limpyData.colors.primary} 100%)`,
        opacity: fadeIn,
      }}
    >
      <LimpyDiscountOffer
        discount={limpyData.offer.discount}
        description={limpyData.offer.description}
        subtitle={limpyData.offer.subtitle}
        primaryColor={limpyData.colors.primary}
      />
    </AbsoluteFill>
  );
};

// =============================================================================
// ESCENA 4: CALL TO ACTION (13-15s)
// =============================================================================
const Scene4CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación del botón
  const buttonScale = spring({
    frame: frame - 8,
    fps,
    config: {
      damping: 15,
      stiffness: 130,
    },
  });

  // Pulso del botón
  const pulse = interpolate((frame - 15) % 35, [0, 17, 35], [1, 1.04, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      className="flex flex-col items-center justify-center px-12"
      style={{
        background: `linear-gradient(135deg, ${limpyData.colors.secondary} 0%, ${limpyData.colors.primary} 100%)`,
      }}
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,.15) 2px, transparent 2px)',
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      <div
        className="relative z-10 flex flex-col items-center space-y-12 text-center"
        style={{ opacity: fadeIn }}
      >
        {/* Título CTA */}
        <h2 className="text-6xl font-display font-bold text-white leading-tight">
          {limpyData.cta.primary}
        </h2>

        {/* Botón principal */}
        <button
          className="text-white font-display font-bold text-4xl px-16 py-8 rounded-3xl shadow-2xl border-4 border-white/30 relative overflow-hidden"
          style={{
            backgroundColor: limpyData.colors.primary,
            transform: `scale(${buttonScale * pulse})`,
          }}
        >
          {/* Brillo animado */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            style={{
              transform: `translateX(${interpolate(
                frame,
                [15, 50],
                [-200, 400]
              )}%)`,
            }}
          />
          <span className="relative z-10">{limpyData.cta.secondary}</span>
        </button>

        {/* URL del sitio */}
        <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-full border border-white/20 flex items-center space-x-4">
          <Globe size={36} color="#ffffff" strokeWidth={2} />
          <span className="text-3xl font-body font-bold text-white">
            {limpyData.brand.url}
          </span>
        </div>

        {/* Logo pequeño al final */}
        <div className="mt-8 opacity-90">
          <div className="text-4xl font-display font-bold text-white">
            {limpyData.brand.name}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
