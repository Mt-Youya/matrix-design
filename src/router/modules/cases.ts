import { lazy } from "react"
import { IRouter } from "../index"

const cases: IRouter[] = [
  {
    path: "/cases",
    meta: {
      title: "項目案例"
    },
    Component: lazy(() => import("@/pages/cases"))
  }
]

export default cases
