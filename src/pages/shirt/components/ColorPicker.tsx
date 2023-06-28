import React from "react"
import { useSnapshot } from "valtio"
import { SketchPicker } from "react-color"
import state from "@/store"

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div style={{ position: "absolute", left: "100%", marginLeft: ".75rem" }}>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={color => (state.color = color.hex)}
        presetColors={["#000", "#fff", "#f00", "#0f0", "#00f"]}
      />
    </div>
  )
}

export default ColorPicker
