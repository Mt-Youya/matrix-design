import state from "@/store"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import React, { FC, ReactNode, useRef } from "react"
import { Vector3 } from "three"
import { useSnapshot } from "valtio"

const CameraRig: FC<{ children: ReactNode }> = ({ children }) => {
  const snap = useSnapshot(state)
  const group = useRef<THREE.Group>(null!)
  useFrame((states, delta) => {
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 768

    // set the initial position of the model
    let targetPosition = new Vector3(-0.4, 0, 2)
    if (snap.intro) {
      if (isBreakpoint) targetPosition = new Vector3(0, 0, 2)
      if (isMobile) targetPosition = new Vector3(0, 0.2, 2.4)
    } else {
      if (isMobile) targetPosition = new Vector3(0, 0, 2.5)
      else targetPosition = new Vector3(0, 0, 2)
    }

    // set model camera position
    easing.damp3(states.camera.position, targetPosition, 0.25, delta)

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [states.pointer.y / 10, -states.pointer.x / 5, 0],
      0.25,
      delta
    )
  })
  return <group ref={group}>{children} </group>
}

export default CameraRig
