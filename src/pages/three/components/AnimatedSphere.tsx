import React from "react"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352fd"
        attach="material"
        distort={1}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}

export default AnimatedSphere
