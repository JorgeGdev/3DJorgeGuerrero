import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.1}
        intensity={1.5}
      />
    </EffectComposer>
  );
}
