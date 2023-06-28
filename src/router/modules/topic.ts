import { lazy } from "react";
import { IRouter } from "../index";

const topic: IRouter[] = [
  {
    path: "/topic",
    meta: {
      title: "研發課題",
    },
    Component: lazy(() => import("@/pages/topic")),
  },
];

export default topic;
