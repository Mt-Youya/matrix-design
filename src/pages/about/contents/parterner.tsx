import React from "react"
import TitleHeader from "@/components/TitleHeader"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const listImg: Array<{ src: string }> = [
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  },
  {
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/95/rBiFUGJrQ1CAeUCaAAAuWMjX7qo890.jpg"
  }
]

const swiperProps = {
  modules: [Autoplay],
  spaceBetween: 30,
  slidesPerView: 5,
  loop: true,
  loopedSlides: 5,
  autoplay: {
    delay: 100,
    disableOnInteraction: false
  }
}
const Parterner = () => {
  return (
    <div className="parterner-container">
      <TitleHeader title="主要合作夥伴" />
      <div className="parterner-box">
        <Swiper {...swiperProps}>
          {listImg.map(({ src }, idx) => (
            <SwiperSlide key={idx + src}>
              <img src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper {...swiperProps}>
          {listImg.map(({ src }, idx) => (
            <SwiperSlide key={idx + src}>
              <img src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper {...swiperProps}>
          {listImg.map(({ src }, idx) => (
            <SwiperSlide key={idx + src}>
              <img src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Parterner
