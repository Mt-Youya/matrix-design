import { useSnapshot } from "valtio"
import { easing } from "maath"
import { Decal, useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import state from "@/store"
import { useEffect } from "react"

const Shirt = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/dalle", { method: "POST" })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  })
  useFrame((_, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("/models/shirt_baked.glb")
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  const stateString = JSON.stringify(snap)
  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt
