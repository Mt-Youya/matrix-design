import swatch from "@/assets/images/shirt/swatch.png"
import fileIcon from "@/assets/images/shirt/file.png"
import ai from "@/assets/images/shirt/ai.png"
import logoShirt from "@/assets/images/shirt/logo-tshirt.png"
import stylishShirt from "@/assets/images/shirt/stylish-tshirt.png"

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch
  },
  {
    name: "filepicker",
    icon: fileIcon
  },
  {
    name: "aipicker",
    icon: ai
  }
]

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt
  },
  {
    name: "stylishShirt",
    icon: stylishShirt
  }
]

type itemType = {
  stateProperty: string
  filterTab: string
}
interface DecalType {
  [key: string]: any
  logo: itemType
  full: itemType
}
export const DecalTypes: DecalType = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt"
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt"
  }
}
