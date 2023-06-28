/*
 * @Author: Yonjay dd257248@gmail.com
 * @Date: 2023-01-17 21:01:42
 * @LastEditors: Yonjay dd257248@gmail.com
 * @LastEditTime: 2023-02-14 09:32:32
 * @FilePath: \matrix-design-react\src\router\modules\orthers.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from "react"
import { IRouter } from "../index"
import home from "./home"
import search from "./search"
import login from "./login"
// import three from "./three"
import shirt from "./shirt"

const otherRoutes: IRouter[] = [
  {
    path: "/403",
    Component: lazy(() => import("@/pages/Result/403"))
  },
  {
    path: "/500",
    Component: lazy(() => import("@/pages/Result/500"))
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/Result/404"))
  },
  ...home,
  ...search,
  ...login,
  // ...three,
  ...shirt
]

export default otherRoutes
