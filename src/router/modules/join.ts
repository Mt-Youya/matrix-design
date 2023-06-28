import { lazy } from "react"
import { IRouter } from "../index"

const join: IRouter[] = [
  {
    path: "/join",
    meta: {
      title: "加入我们"
    },
    Component: lazy(() => import("@/pages/join"))
  }
]

export default join
