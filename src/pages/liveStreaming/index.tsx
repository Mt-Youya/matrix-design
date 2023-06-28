import { useState, useEffect } from "react"
import flv from "mpegts.js"

interface LiveDemoProps {
  defaultUrl?: string
  onUrlChange?: Function
}
export default function LiveDemo({
  defaultUrl = "http://ip:8000/live/stream.flv",
  onUrlChange
}: LiveDemoProps) {
  let player = null
  let playerDom = null
  const [liveUrl, setLiveUrl] = useState(defaultUrl)
  useEffect(() => {
    if (flv.isSupported) {
      player = flv.createPlayer(
        { type: "flv", isLive: true, hasAudio: false, hasVideo: true, url: liveUrl, cors: true },
        { enableWorker: false, lazyLoadMaxDuration: 3 * 60, seekType: "range" }
      )
      player.attachMediaElement(playerDom)
      player.load()
    } else {
      console.log("Your browser is not support mpegts.js")
    }
  }, [])
  function updatePlayer() {
    if (player) {
      player.unload()
      player.detachMediaElement()
      player.destroy()
      player = null
    }
    player = flv.createPlayer(
      { type: "flv", isLive: true, hasAudio: false, hasVideo: true, url: liveUrl, cors: true },
      { enableWorker: false, lazyLoadMaxDuration: 3 * 60, seekType: "range" }
    )
    player.attachMediaElement(playerDom)
    player.load()
  }
  return (
    <div className="live-demo">
      <div className="modify-url">
        <input
          value={liveUrl}
          onChange={value => {
            setLiveUrl(value)
          }}
        />
        <button
          type={"primary"}
          onClick={() => {
            updatePlayer()
            onUrlChange && onUrlChange(liveUrl)
          }}
        >
          修改
        </button>
      </div>
      <video
        style={{ width: "100%", height: "100%" }}
        controls
        className="video-demo"
        ref={e => (playerDom = e)}
      ></video>
    </div>
  )
}
