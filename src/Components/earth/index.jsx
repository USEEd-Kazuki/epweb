import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "./textures/8k_earth_daymap.jpg";
import EarthNormalMap from "./textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "./textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "./textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2} />
      <mesh ref={cloudsRef} position={[0.9, 0.125, 3]}>
        <sphereGeometry args={[0.81, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0.9, 0.125, 3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        { <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> }
      </mesh>
    </>
  );
}
