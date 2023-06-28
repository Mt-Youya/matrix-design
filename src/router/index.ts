import React from "react"
import { BrowserRouterProps } from "react-router-dom"
import timeline from "./modules/timeline"
import about from "./modules/about"
import news from "./modules/news"
import topic from "./modules/topic"
import services from "./modules/services"
import contact from "./modules/contact"
import cases from "./modules/cases"
import orthers from "./modules/orthers"
import join from "./modules/join"

export interface IRouter {
  path: string
  redirect?: string
  Component?: React.FC<BrowserRouterProps> | (() => any)
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string
    Icon?: React.FC
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean
    /**
     * 单层路由
     */
    single?: boolean
  }
  children?: IRouter[]
}

// const routes: IRouter[] = [
//   {
//     path: "/login",
//     Component: lazy(() => import("pages/Login")),
//     isFullPage: true,
//     meta: {
//       hidden: true,
//     },
//   },
//   {
//     path: "/",
//     redirect: "/dashboard/base",
//   },
// ];

export const navBarRouter = [
  ...timeline,
  ...about,
  ...services,
  ...cases,
  ...topic,
  ...news,
  ...contact,
  ...join
]

export default navBarRouter.concat(orthers)

const pageModules = import.meta.glob("../pages/**/page.json", { eager: true, import: "default" })
const compModules = import.meta.glob("../pages/**/index.tsx")

interface pageJsonType {
  path: string
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}
const routess = Object.keys(pageModules).map(key => {
  const pageJson = pageModules[key] as pageJsonType
  const comp = compModules[key.replace("page.json", "index.tsx")]
  return {
    path: pageJson.path,
    Component: comp,
    meta: pageJson.meta
  }
})
