import { lazy } from "react";
import { IRouter } from "../index";

const map: IRouter[] = [
  {
    path: "/Bmap",
    meta: {
      title: "百度地图",
    },
    Component: lazy(() => import("@/pages/map")),
  },
  {
    path: "/Gmap",
    meta: {
      title: "高德地图",
    },
    Component: lazy(() => import("@/pages/map/index2")),
  },
];

export default map;
