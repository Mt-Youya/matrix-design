import { lazy } from "react";
import { IRouter } from "../index";

const search: IRouter[] = [
  {
    path: "/search",
    meta: {
      title: "搜索",
    },
    Component: lazy(() => import("@/pages/search")),
  },
];

export default search;
