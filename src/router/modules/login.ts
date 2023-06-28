import { lazy } from "react"
import { IRouter } from "../index"

const login: IRouter[] = [
  {
    path: "/login",
    meta: {
      title: "登录"
    },
    Component: lazy(() => import("@/pages/login"))
  }
]

export default login
