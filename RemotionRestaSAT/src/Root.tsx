import { Composition } from 'remotion';
import { RestaSATPromo } from './Composition';
import { RestaSATVertical } from './components/Main';
import { LimpyVertical } from './components/LimpyVertical';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Videos de RestaSAT */}
      <Composition
        id="RestaSATPromo"
        component={RestaSATPromo}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
      <Composition
        id="RestaSATVertical"
        component={RestaSATVertical}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />

      {/* Video de Limpy (formato vertical para móvil) */}
      <Composition
        id="LimpyVertical"
        component={LimpyVertical}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
