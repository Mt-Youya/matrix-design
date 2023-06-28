import { lazy } from "react"
import { IRouter } from "../index"

const contact: IRouter[] = [
  {
    path: "/contact",
    meta: {
      title: "聯係我們"
    },
    Component: lazy(() => import("@/pages/contact"))
  }
]

export default contact
