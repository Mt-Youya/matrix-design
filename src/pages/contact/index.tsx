import React from "react"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import TitleHeader from "@/components/TitleHeader"
import { distribution } from "./data"
import "./index.modules.less"

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <img
          className="contact-banner"
          src="https://erpapi.matrixdesign.cn/group1/M00/02/AD/rBiFUGKMSBSAGZLuAAqEM6du-No954.jpg"
          alt=""
        />
        <div className="contact-content">
          <div className="distribution">
            <ul className="contact-distribution">
              {distribution.map((item) => (
                <li key={item.id}>
                  <div className="img">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <h3 className="city"> {item.nameCh}</h3>
                  <p className="region">{item.region} </p>
                  <p className="adress">{item.adress}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="offline">
            <TitleHeader title="線下體驗店" />
            <ul className="contact-offline">
              <li>
                <div className="img">
                  <img
                    src="https://mimgs.matrixdesign.cn/site/1665490419459Web 1920 – 2.jpg"
                    alt=""
                  />
                </div>
                <h3 className="city">深圳店 </h3>
                <p className="region">深圳市羅湖區 </p>
                <p className="adress">展藝路藝展中心1期4009、4010商鋪</p>
              </li>
              <li>
                <div className="img">
                  <img
                    src="https://mimgs.matrixdesign.cn/site/1665466878164Web 1920 – 1.jpg"
                    alt=""
                  />
                </div>
                <h3 className="city">上海店 </h3>
                <p className="region"> 上海市閔行區</p>
                <p className="adress">金匯路528虹橋古玩城4樓D079-D080</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
