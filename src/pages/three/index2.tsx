import React, { Suspense, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import {
  Scene,
  PerspectiveCamera,
  SphereGeometry,
  MeshBasicMaterial,
  Color,
  Mesh,
  WebGLRenderer,
  AxesHelper
} from "three"
import "./index.modules.less"
import { Canvas } from "@react-three/fiber"

// const scene = new Scene()
// const camera = new PerspectiveCamera(
//   30,
//   window.innerWidth / window.innerHeight,
//   1,
//   1000
// )
// camera.position.set(0, 0, 20)
// const axHelper = new AxesHelper(50)
// const geometry = new SphereGeometry()
// const material = new MeshBasicMaterial({ color: new Color("#ccc") ,wireframe:true})
// const cube = new Mesh(geometry, material)
// scene.add(cube)

// const renderer = new WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.render(scene,camera)
// const control = new OrbitControls(camera,renderer.domElement)

const scene = new Scene()
const camera = new PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  10,
  10000
)
const geometry = new SphereGeometry()
const material = new MeshBasicMaterial({ color: new Color("#ccc") ,wireframe:true})
const cube = new Mesh(geometry, material)
scene.add(cube)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
const axHelper = new AxesHelper(50)
scene.add(axHelper)

const Three = () => { 
  return (
    <Canvas className="three-container">
      <OrbitControls camera={camera} />
    </Canvas>
  )
}

export default Three
