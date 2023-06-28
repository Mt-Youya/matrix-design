import { ReactEventHandler, useEffect } from "react"
import { Map, Marker, NavigationControl, InfoWindow ,CityListControl} from "react-bmapgl"

import "./index.modules.less"

const Bmap = () => {
  useEffect(() => {}, [])

  return (
    <div id="map-container">
      <Map
        style={{ height: 450 }}
        center={{lng: 116.402544, lat: 39.928216}}
        zoom={12}
        heading={0}
        tilt={40}
        enableScrollWheelZoom
      >
        <CityListControl/>
      </Map>
    </div>
  )
}

export default Bmap
