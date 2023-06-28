import React from "react"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import LiCard from "@/components/TopicAndNewsLiCard"
import { data } from "./data"
import "./index.modules.less"

const News = () => {
  return (
    <>
      <NavBar />
      <div className="news-container">
        <img
          src="https://mimgs.matrixdesign.cn/site/16659064450371016官网-10.jpg"
          alt=""
          className="news-banner"
        />
        <div className="news-content">
          <ul className="news-list">
            {data.map(item => (
              <LiCard key={item.id} data={item} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default News
