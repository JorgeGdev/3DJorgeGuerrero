import { useLayoutEffect, useRef } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import React from 'react';

class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '8', OCTAVES: '3' },
      uniforms: {
        fireTex: { value: null },
        noiseTex: { value: null },
        color: { value: new THREE.Color(0xff5500) },
        time: { value: 0.0 },
        seed: { value: 0.0 },
        invModelMatrix: { value: new THREE.Matrix4() },
        scale: { value: new THREE.Vector3(1, 1, 1) },
        noiseScale: { value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { value: 2.5 },
        lacunarity: { value: 3.0 },
        gain: { value: 0.6 },
        intensity: { value: 1.0 },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        #define ITERATIONS 8
        uniform vec3 color;
        uniform float time;
        uniform float seed;
        uniform mat4 invModelMatrix;
        uniform vec3 scale;
        uniform vec4 noiseScale;
        uniform float magnitude;
        uniform float lacunarity;
        uniform float gain;
        uniform sampler2D fireTex;
        uniform sampler2D noiseTex;
        uniform float intensity;
        varying vec3 vWorldPos;

        

        float noise(vec3 p) {
          return texture2D(noiseTex, p.xy).r;
        }

        float turbulence(vec3 p) {
          float sum = 0.0;
          float freq = 1.0;
          float amp = 1.0;
          for(int i = 0; i < OCTAVES; i++) {
            sum += abs(noise(p * freq)) * amp;
            freq *= lacunarity;
            amp *= gain;
          }
          return sum;
        }

        vec4 samplerFire(vec3 p, vec4 scale) {
          vec2 st = vec2(length(p.xz), p.y);
          if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          p.y -= (seed + time) * scale.w;
          p *= scale.xyz;
          st.y += sqrt(st.y) * magnitude * turbulence(p);
          if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          return texture2D(fireTex, st);
        }

        void main() {
          vec3 rayPos = vWorldPos;
          vec3 rayDir = normalize(rayPos - cameraPosition);
          float rayLen = 0.0288 * length(scale.xyz);
          vec4 col = vec4(0.0);
          for(int i = 0; i < ITERATIONS; i++) {
            rayPos += rayDir * rayLen;
            vec3 lp = (invModelMatrix * vec4(rayPos, 1.0)).xyz;
            lp.y += 0.5;
            lp.xz *= 2.0;
            col += samplerFire(lp, noiseScale);
          }
          col.rgb *= color * intensity;
          col.a = col.r;
          gl_FragColor = col;
        }`,
    });
  }
}

extend({ FireMaterial });

const Fire = React.memo(({ color, intensity = 1.0, ...props }) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, './fire.png');
  const noiseTexture = useLoader(THREE.TextureLoader, './noise.png');

  useFrame((state) => {
    const material = ref.current.material;
    ref.current.updateMatrixWorld();
    material.uniforms.invModelMatrix.value.copy(ref.current.matrixWorld).invert();
    material.uniforms.time.value = state.clock.elapsedTime;
    material.uniforms.scale.value = ref.current.scale;
  });

  useLayoutEffect(() => {
    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;

    const material = ref.current.material;
    material.uniforms.fireTex.value = texture;
    material.uniforms.noiseTex.value = noiseTexture;
    material.uniforms.color.value = color || new THREE.Color(0xff5500);
    material.uniforms.intensity.value = intensity;
    material.uniforms.seed.value = Math.random() * 19.19;
  }, [texture, noiseTexture, color, intensity]);

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <fireMaterial transparent depthWrite={false} depthTest={false} />
    </mesh>
  );
});

export default Fire;
