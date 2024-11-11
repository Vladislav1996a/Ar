import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

export function Model({ colorBody, colorMetal, position,texturePath }) {
  const { nodes, materials } = useGLTF("/Ar/backpack.glb");
  const bodyTexture = useTexture(texturePath);

  useEffect(() => {
    materials.body.color.set(colorBody);
    materials.metall.color.set(colorMetal);
    materials.strap.color.set(colorBody);
    materials.body.map = bodyTexture;
    materials.body.needsUpdate = true;
  }, [materials, colorBody, bodyTexture, colorMetal,texturePath]);

  return (
    <group position={position} dispose={null}>
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.strap}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Ar/backpack.glb");
