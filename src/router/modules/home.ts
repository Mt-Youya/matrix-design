import { lazy } from "react"
import { IRouter } from "../index"

const home: IRouter[] = [
  {
    path: "/home",
    meta: {
      title: "主页"
    },
    Component: lazy(() => import("@/pages/home"))
  }
]

export default home
