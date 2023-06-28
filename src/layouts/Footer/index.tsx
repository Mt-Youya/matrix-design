import React from "react"
import type { dataType } from "./data"
import { cases, based, contactWay, headquartered, relation } from "./data"
import { EuiToolTip } from "@elastic/eui"

import Logo from "@/assets/images/logo-dark.png"
import WechatQR from "@/assets/images/wechatQR.png"
import WechatIcon from "@/assets/icons/wechat.png"
import TiktokQR from "@/assets/images/tiktokQR.png"
import TiktokIcon from "@/assets/icons/tiktok.png"
import Gongan from "@/assets/images/gongan.png"
import "./index.modules.less"

const FooterContent: React.FC<dataType> = ({ className, title, list, children }) => {
  return (
    <div className={`content-item ${className}`}>
      <div className="item-title">{title}</div>
      <div className="item-content">
        {list?.map((item: string, idx: number) => (
          <div key={item + idx}>{item}</div>
        ))}
        {children}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo__wrap">
        <img src={Logo} alt="MatrixDesign Logo" />
        <p className="company">矩陣縱橫設計股份有限公司</p>
      </div>
      <div className="footer-content">
        <FooterContent {...cases} />
        <FooterContent {...based} />
        <FooterContent {...contactWay} />
        <FooterContent {...headquartered}>
          <p>深圳市福田保稅區市花路福年廣場B3棟411室</p>
          <div className="item-content__container">
            <div className="item-content__wrap wechat">
              <EuiToolTip position="top" content={<img src={WechatQR} alt="wechat QRcode" />}>
                <img src={WechatIcon} alt="wechat" />
              </EuiToolTip>
            </div>
            <div className="item-content__wrap tiktok">
              <EuiToolTip position="top" content={<img src={TiktokQR} alt="tiktok QRcode" />}>
                <img src={TiktokIcon} alt="tiktok" />
              </EuiToolTip>
            </div>
          </div>
        </FooterContent>
        <FooterContent {...relation} />
      </div>
      <div className="footer-recorded">
        <p className="recorded-number">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
            备案号：粤ICP备17020797号
          </a>
        </p>
        <p className="recorded-number">
          <img src={Gongan} alt="China Public Security Icon" />
          粤公网安备 44030402005648号
        </p>
      </div>
    </footer>
  )
}

export default Footer
