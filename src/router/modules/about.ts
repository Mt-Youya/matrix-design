import { lazy } from "react"
import { IRouter } from "../index"

const about: IRouter[] = [
  {
    path: "/about",
    meta: {
      title: "關於我們"
    },
    Component: lazy(() => import("@/pages/about"))
  }
]

export default about
