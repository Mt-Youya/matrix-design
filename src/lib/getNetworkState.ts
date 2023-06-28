import { ElMessage } from "element-plus"

interface IInfo {
  type: "2g" | "3g" | "4g" | "5g" | "offline"
  rtt?: number
  downlink?: number
}

function getNetworkInfo(): IInfo | void {
  if (!navigator) return console.warn("navigator is not valid")
  if (!navigator.connection) return console.error("navigator haven't property connection")
  const info: IInfo = navigator.onLine
    ? {
        type: navigator.connection.effectiveType,
        rtt: navigator.connection.rtt,
        downlink: navigator.connection.downlink
      }
    : { type: "offline" }

  return info
}

function updateInfo() {
  type TType = ReturnType<typeof getNetworkInfo>
  const info: TType = getNetworkInfo() as IInfo
  // if (info.type === "offline") return ElMessage.error("网络已断开")
  // if (info.type === "2g" || info.type === "3g") return ElMessage.warning("当前网络速度较慢!")
}
updateInfo()
window.addEventListener("online", updateInfo)
window.addEventListener("offline", updateInfo)
if ("connection" in navigator) {
  navigator.connection?.addEventListener("change", updateInfo)
}

setInterval(updateInfo, 1000)
