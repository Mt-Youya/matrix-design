import { lazy } from "react"
import { IRouter } from "../index"

const shirt: IRouter[] = [
  {
    path: "/shirt",
    meta: {
      title: "衬衫"
    },
    Component: lazy(() => import("@/pages/shirt"))
  }
]

export default shirt
