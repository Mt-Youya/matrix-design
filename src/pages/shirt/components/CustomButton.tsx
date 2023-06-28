import state from "@/store"
import { FC } from "react"
import { useSnapshot } from "valtio"

interface IProps {
  type: "filled" | "outline"
  title: string
  customStyle?: { [key in string]: string | number }
  handleClick?: () => void
}

const CustomButton: FC<IProps> = ({ type, title, customStyle, handleClick }) => {
  const snap = useSnapshot(state)
  const generateStyles = (type: string) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff"
      }
    } else if (type === "outlined") {
      return {
        borderWidth: "1px",
        color: snap.color,
        border: snap.color
      }
    }
  }
  return (
    <button
      onClick={handleClick}
      style={{
        ...generateStyles(type),
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        flex: 1,
        borderRadius: "0.375rem",
        ...customStyle
      }}
    >
      {title}
    </button>
  )
}

export default CustomButton
