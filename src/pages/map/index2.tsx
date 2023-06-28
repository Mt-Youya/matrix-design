import React, { useEffect } from "react"
import AMapLoader from "@amap/amap-jsapi-loader"

import "./index.modules.less"

const Gmap = () => {
  let map = {}
  useEffect(() => {
    AMapLoader.load({
      key: "b6bba4c9f64ffddf4cabcd1454df975f", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.ToolBar", "AMap.Driving"],
      AMapUI: {
        version: "1.1",
        plugins: []
      },
      Loca: {
        version: "2.0.0"
      }
    })
      .then((AMap: any) => {
        map = new AMap.Map("mapcontainer", {
          viewMode: "3D",
          zoom: 5,
          zooms: [2, 22],
          center: [105.602725, 37.076636]
        })
        let positionArr = [
          [113.357224, 34.977186],
          [114.555528, 37.727903],
          [112.106257, 36.962733],
          [109.830097, 31.859027],
          [116.449181, 39.98614]
        ]
        // for (let item of positionArr) {
        //   let marker = new AMap.Marker({
        //     position: [item[0], item[1]]
        //   })
        //   // console.log(marker);
        //   map.add(marker)
        // }
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  return (
    <div id="container" className="map" style={{ height: "800px" }}>
      <div className="map-title">
        <h3>JSAPI React地图组件示例</h3>
      </div>
      <div id="mapcontainer" className="map" style={{ height: "100%" }} />
    </div>
  )
}

export default Gmap
