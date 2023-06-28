import React from "react"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import LiCard from "@/components/TopicAndNewsLiCard"
import { topic } from "../timeline/category"
import "./index.modules.less"

const Topic = () => {
  return (
    <>
      <NavBar />
      <div className="topic-container">
        <img
          className="topic-banner"
          src="https://mimgs.matrixdesign.cn/site/16659064247501016官网-08.jpg"
          alt=""
        />
        <div className="topic-content">
          <ul>
            {topic.map(item => (
              <LiCard key={item.id} data={item} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Topic
