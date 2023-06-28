import React from "react"
import { Link } from "react-router-dom"
import TitleHeader from "@/components/TitleHeader"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { data as imgList, records } from "./ah-data"

const AwardsHonors = () => {
  return (
    <div className="awardsHonors-container">
      <TitleHeader title="獎項榮譽" />
      <Swiper modules={[Navigation]} navigation>
        {imgList.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="swiper-item"
              src={item.honourBanner}
              alt={item.projectName}
            />
            <div className="swiper-slot">
              <h3>{item.title} </h3>
              <p>{item.subTitle} </p>
              <Link to={`/case/detail?typeId=${item.typeId}&id=${item.id}`}>
                了解項目
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="awards-box">
        {records.map((item) => (
          <img
            key={item.id}
            className="awards-img"
            src={
              item.cardBanner ||
              "https://erpapi.matrixdesign.cn/group1/M00/02/94/rBiFUGJrQT2Aal6WAAAgAbdYiDM427.jpg"
            }
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default AwardsHonors
