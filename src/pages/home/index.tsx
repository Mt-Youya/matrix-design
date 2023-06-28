import { useRef, useState, createContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { getHome } from "@/services/home"
import horn from "./horn"

import Logo from "@/assets/images/logo.png"
import mp4 from "@/assets/media/home.mp4"
import volume from "@/assets/images/volume-notice.png"
import ringlingdang from "@/assets/images/ringlingdang.jpg"

import "./index.modules.less"

export const HomeContext = createContext<string | null>("wuhoo~~")

const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")
  const video = useRef<HTMLVideoElement>(null)

  // interface resType {
  //   body: object
  //   data: [] | null
  //   msg: string | null
  //   msgList: []
  //   obj: null
  //   obj1: null
  //   resultMap: null
  //   status: string
  //   total: number
  //   wxLoginStatus: number
  // }
  useEffect(() => {
    // video.current?.play()
  }, [])

  useEffect(() => {
    getHome().then((res: any) => setUrl(res.body.loginUrl))
  }, [url])

  return (
    <HomeContext.Provider value={url}>
      <div className="home-container">
        <div className="home-content">
          <img id="logo" src={Logo} alt="MatrixDesign Logo" />
          <Link to="/timeline">
            {/* <video
              id="video"
              src={mp4}
              autoPlay={true}
              muted={true}
              loop={true}
              ref={video}
              preload="metadata"
            /> */}
            This is a video TEMPLATE!
            <div className="avatar">
              <img src={ringlingdang} alt="" />
            </div>
          </Link>
        </div>
        <div className="home-muted" onClick={() => setIsActive(prve => !prve)}>
          <img className="muted-play" src={isActive ? horn : volume} alt="audio" />
        </div>
      </div>
    </HomeContext.Provider>
  )
}

export default Home
