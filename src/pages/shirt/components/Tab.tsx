import { FC } from "react"
import { useSnapshot } from "valtio"
import state from "@/store"

interface IProps {
  tab: { name: string; icon: string }
  isFilterTab?: boolean
  isActiveTab?: boolean
  handleClick?: () => void
}
const Tab: FC<IProps> = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab && "glassmorphism"}`}
      onClick={handleClick}
      style={{ ...activeStyles, borderRadius: isFilterTab ? "9999px" : "4px" }}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        style={
          isFilterTab
            ? { width: "66.6667%", height: "66.6667%" }
            : { width: "91.666667%", height: "91.666667%", objectFit: "contain" }
        }
      />
    </div>
  )
}

export default Tab
