export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas") as HTMLCanvasElement
  const dataURL = canvas.toDataURL()
  const link = document.createElement("a") as HTMLAnchorElement

  link.href = dataURL
  link.download = "canvas.png"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const reader = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const fileReader: FileReader = new FileReader()
    fileReader.onload = () => resolve(fileReader.result)
    fileReader.readAsDataURL(file)
  })

export const getContrastingColor = (color: string): "black" | "white" => {
  // Remove the '#' character if it exists
  const hex: string = color.replace("#", "")

  // Convert the hex string to RGB values
  const r: number = parseInt(hex.substring(0, 2), 16)
  const g: number = parseInt(hex.substring(2, 4), 16)
  const b: number = parseInt(hex.substring(4, 6), 16)

  // Calculate the brightness of the color
  const brightness: number = (r * 299 + g * 587 + b * 114) / 1000

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white"
}
