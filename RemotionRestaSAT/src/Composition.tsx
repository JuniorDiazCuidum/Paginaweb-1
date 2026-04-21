import React from 'react';
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig, spring, Img } from 'remotion';
import { ServiceSlider } from './components/ServiceSlider';
import { DiscountBadge } from './components/DiscountBadge';
import './style.css';

export const RestaSATPromo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Escena 1: Logo y gancho (0-3s = 0-90 frames) */}
      <Sequence from={0} durationInFrames={90}>
        <Scene1 />
      </Sequence>

      {/* Escena 2: Slider de servicios (3-8s = 90-240 frames) */}
      <Sequence from={90} durationInFrames={150}>
        <Scene2 />
      </Sequence>

      {/* Escena 3: Promo exclusiva (8-12s = 240-360 frames) */}
      <Sequence from={240} durationInFrames={120}>
        <Scene3 />
      </Sequence>

      {/* Escena 4: CTA final (12-15s = 360-450 frames) */}
      <Sequence from={360} durationInFrames={90}>
        <Scene4 />
      </Sequence>
    </AbsoluteFill>
  );
};

// Escena 1: Logo y gancho
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 20,
      stiffness: 100,
    },
  });

  const textOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const textY = interpolate(frame, [20, 40], [30, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-gradient-to-br from-restasat-blue via-blue-700 to-blue-900">
      {/* Patrón de fondo industrial */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }} />
      </div>

      {/* Logo */}
      <div
        className="relative z-10"
        style={{
          transform: `scale(${logoScale})`,
        }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <div className="text-8xl font-display font-black text-restasat-blue">
            RestaSAT
          </div>
        </div>
      </div>

      {/* Texto del gancho */}
      <div
        className="relative z-10 text-center"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <h2 className="text-5xl font-display font-bold text-white leading-tight">
          Tu maquinaria siempre a punto
        </h2>
        <div className="mt-4 flex items-center justify-center space-x-3">
          <div className="w-16 h-1 bg-restasat-orange rounded-full" />
          <span className="text-2xl">⚙️</span>
          <div className="w-16 h-1 bg-restasat-orange rounded-full" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Escena 2: Slider de servicios
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-restasat-blue/80 to-gray-900">
      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div style={{ opacity: fadeIn }} className="relative z-10">
        <ServiceSlider />
      </div>

      {/* Texto servicio técnico */}
      <div
        className="absolute bottom-24 text-center"
        style={{ opacity: fadeIn }}
      >
        <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
          <p className="text-2xl font-body font-medium text-white">
            Servicio Técnico Oficial en Valencia
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Escena 3: Promo exclusiva
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-gradient-to-br from-restasat-orange via-orange-600 to-red-600">
      {/* Efectos de rayos radiantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-full bg-yellow-300/20 origin-top"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      <div style={{ opacity: fadeIn }} className="relative z-10 flex flex-col items-center">
        {/* Título de la promo */}
        <div className="text-6xl font-display font-black text-white text-center mb-12 uppercase tracking-tight">
          <div className="mb-2">PROMO EXCLUSIVA</div>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-2 bg-white rounded-full" />
            <span className="text-5xl">🎉</span>
            <div className="w-24 h-2 bg-white rounded-full" />
          </div>
        </div>

        {/* Badge de descuento */}
        <DiscountBadge />

        {/* Texto adicional */}
        <div className="mt-12 text-4xl font-display font-bold text-white text-center">
          EN TU PRIMER AVISO
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Escena 4: CTA final
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const buttonScale = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 15,
      stiffness: 150,
    },
  });

  // Pulso del botón
  const pulse = interpolate(
    (frame - 20) % 40,
    [0, 20, 40],
    [1, 1.05, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-gradient-to-br from-restasat-blue via-blue-800 to-gray-900">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div style={{ opacity: fadeIn }} className="relative z-10 flex flex-col items-center space-y-12">
        {/* Llamado a la acción */}
        <h3 className="text-6xl font-display font-black text-white text-center leading-tight">
          ¿Listo para empezar?
        </h3>

        {/* Botón CTA */}
        <button
          className="bg-restasat-orange hover:bg-orange-600 text-white font-display font-bold text-4xl px-20 py-8 rounded-2xl shadow-2xl border-4 border-white/20 cursor-pointer relative overflow-hidden"
          style={{
            transform: `scale(${buttonScale * pulse})`,
          }}
        >
          {/* Brillo animado */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              transform: `translateX(${interpolate(frame, [20, 60], [-200, 400])}%)`,
            }}
          />
          <span className="relative z-10">Solicitar Presupuesto</span>
        </button>

        {/* Website */}
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md px-12 py-6 rounded-full border border-white/20">
          <span className="text-4xl">🌐</span>
          <span className="text-4xl font-body font-semibold text-white">
            www.restasat.com
          </span>
        </div>

        {/* Iconos de contacto */}
        <div className="flex items-center space-x-8 mt-4">
          <div className="text-5xl">📞</div>
          <div className="text-5xl">📧</div>
          <div className="text-5xl">📍</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
