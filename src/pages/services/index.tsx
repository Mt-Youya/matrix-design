import React from "react"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import TitleHeader from "@/components/TitleHeader"
import { design, originality } from "./data"
import "./index.modules.less"

interface IProps {
  box: string
  titleHeader: string
  data: object[]
}

const ContentBox: React.FC<IProps> = props => (
  <div className={`services-${props.box}`}>
    <TitleHeader title={props.titleHeader} />
    <div className={`${props.box}-list`}>
      <ul>
        {props.data.map((item: any) => (
          <li key={item.id} className={`${props.box}-item`}>
            <div className="item-content">
              <h3 className="title">{item.title} </h3>
              <p className="text">
                {item.bannerTitle.split("<br/>")[0]}
                <br />
                {item.bannerTitle.split("<br/>")[1]}
              </p>
            </div>
            <img src={item.cardBanner} alt="" />
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="services-container">
        <img
          className="services-banner"
          src="https://mimgs.matrixdesign.cn/site/16659039184061016%E5%AE%98%E7%BD%91-04.jpg"
          alt=""
        />
        <div className="services-box">
          <ContentBox box="design" data={design} titleHeader="設計領域" />
          <ContentBox box="originality" data={originality} titleHeader="創意增值" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
