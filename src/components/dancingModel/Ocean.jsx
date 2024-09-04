import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import { Water } from 'three-stdlib'

extend({ Water })

export default function Ocean() {
    const ref = useRef()
    const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping

    // Usamos CircleGeometry en lugar de PlaneGeometry
    const geom = useMemo(() => new THREE.CircleGeometry(40, 64), [])

    const config = useMemo(
        () => ({
            textureWidth: 512,
            textureHeight: 512,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: false,
            alpha: 0.5, // Ajusta la transparencia del agua
            transparent: true // Asegúrate de que el material sea transparente
        }),
        [waterNormals]
    )

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.material.uniforms.time.value += delta
        }
    })

    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}
