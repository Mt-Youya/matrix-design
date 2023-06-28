import { lazy } from "react";
import { IRouter } from "../index";

const timeline: IRouter[] = [
  {
    path: "/timeline",
    meta: {
      title: "首页",
    },
    Component: lazy(() => import("@/pages/timeline")),
  },
];

export default timeline;
