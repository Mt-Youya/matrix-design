import { proxy } from "valtio"

export interface StateProps {
  intro: boolean
  color: string | `#${string}`
  isLogoTexture: boolean
  isFullTexture: boolean
  logoDecal: string
  fullDecal: string
}

const state: StateProps = proxy({
  intro: true,
  color: "#efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./models/map.jpg",
  fullDecal: "./models/map.jpg"
})

export default state
