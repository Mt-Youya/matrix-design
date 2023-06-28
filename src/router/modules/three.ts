import { lazy } from "react"
import { IRouter } from "../index"

const three: IRouter[] = [
  {
    path: "/three",
    meta: {
      title: "3d模型"
    },
    Component: lazy(() => import("@/pages/three"))
  },
  {
    path: "/three2",
    meta: {
      title: "3d模型2"
    },
    Component: lazy(() => import("@/pages/three/index2"))
  },
]

export default three
