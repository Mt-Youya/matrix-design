import { useState } from "react"
import TitleHeader from "@/components/TitleHeader"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import { awards, originality, topic } from "./category"
import ringdang from "@/assets/images/ringdang.jpg"
import "./index.modules.less"

const imgList = [
  {
    title: "辦公公共",
    content: "WORKPLACE",
    description: "聚焦環境健康，強調空間可持續性",
    src: "https://mimgs.matrixdesign.cn/site/16658938899891663123113905蒙版组 267.jpg"
    // src:ringdang
  },
  {
    title: "住宅人居",
    content: "RESIDENTIAL",
    description: "踐行時代新變化，引領人居新趨勢，為人居賦能",
    src: "https://mimgs.matrixdesign.cn/site/1661337934673蒙版组 273.jpg"
  },
  {
    title: "",
    content: "",
    description: "",
    isNone: true,
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/AC/rBiFUGKLPMOAIG55AAAEh5ZO-uU625.png"
  },
  {
    title: "教育",
    content: "EDUCATION",
    description: "由內向外生長，重塑校園邊界，定義未來新格局",
    src: "https://mimgs.matrixdesign.cn/site/1661396151764%E6%94%B9%20(4).jpg"
  },
  {
    title: "生活體驗館",
    content: "GALLERY",
    description: "推動“去銷售化”，以盤活社區運營",
    src: "https://mimgs.matrixdesign.cn/site/16658938974991661396137094%E6%94%B9%20(1).jpg"
  },
  {
    title: "酒店度假",
    content: "VACATION",
    description: "重新定義奢華，塑造療愈的酒旅體驗",
    src: "https://mimgs.matrixdesign.cn/site/1661259174429%E8%92%99%E7%89%88%E7%BB%84%20280.jpg"
  },
  {
    title: "文化場館",
    content: "CULTURAL VENUES",
    description: "對回憶寄託或未知探索的精神需求",
    src: "https://mimgs.matrixdesign.cn/site/1661259252490%E8%92%99%E7%89%88%E7%BB%84%20277.jpg"
  },
  {
    title: "康養醫美",
    content: "RETAILHEALTHCARE",
    description: "以設計優化功能，滿足新時代用戶需求",
    src: "https://mimgs.matrixdesign.cn/site/16658939094501663147582477%E8%92%99%E7%89%88%E7%BB%84%20302.jpg"
  },
  {
    title: "城市展廳",
    content: "CITY EXHIBITION",
    description: "全新展示智慧城市的未來藍圖",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/A7/rBiFUGKF_OSAK-wEAAKOEdiT_Ac086.png"
  },
  {
    title: "舊建築改造",
    content: "OLD BUILDING RENOVATION",
    description: "保留文化記憶，激活空間使用，探索未來方向",
    src: "https://mimgs.matrixdesign.cn/site/1661259942866%E8%92%99%E7%89%88%E7%BB%84%20262.jpg"
  },
  {
    title: "",
    content: "",
    description: "",
    isNone: true,
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/AC/rBiFUGKLPMuAdaw2AAAEh5ZO-uU194.png"
  },
  {
    title: "鄰里社區",
    content: "NEIGHBORHOOD COMMUNITY",
    description: "創造未來社區，構建有溫度的新型鄰里關係",
    src: "https://mimgs.matrixdesign.cn/site/1661396167072%E6%94%B9%20(2).jpg"
  },
  {
    title: "",
    content: "",
    description: "",
    isMore: true,
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/AC/rBiFUGKLPNeAW8KGAAAEhjYdbVE637.png"
  },
  {
    title: "商業零售",
    content: "COMMERCIAL",
    description: "打造多元感官體驗的“城市客廳”",
    src: "https://mimgs.matrixdesign.cn/site/16658939180491661255368793%E8%92%99%E7%89%88%E7%BB%84%20259.jpg"
  }
]
// fetch("/api/getUserList", { method: "POST" })
//   // .then(res => res.json())
//   .then(res => console.log(res))
const TimeLine = () => {
  const [topicImgSrc, setTopicImgSrc] = useState<string>(topic[0].cardBanner)
  const onMouseEnter = (src: string) => setTopicImgSrc(src)
  return (
    <>
      <NavBar />
      <div className="timeline-container">
        <img
          className="timeline-banner"
          src="https://mimgs.matrixdesign.cn/site/1665402613264官网首頁轮播图-06-06.jpg"
          alt=""
        />
        <div className="timeline-rank">
          <img src="https://mimgs.matrixdesign.cn/site/16660666074451018排名.gif" alt="" />
        </div>
        <div className="timeline-business">
          <div className="business-box">
            {imgList.map((item, idx) => (
              <div key={item.title + idx} className="business-item">
                <div className="business-content">
                  <h3>{item.title} </h3>
                  <p>{item.content} </p>
                  <span>{item.description} </span>
                </div>
                <img src={item.src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="timeline-originality">
          <div className="originality-box">
            <div className="originality-content">
              <h3 className="title">創意增值</h3>
              <p className="text">
                將設計的力量延伸，以行業先導及專業專研，形成矩陣創意增值服務產業鏈，成就空間體驗
              </p>
            </div>
            <div className="originality-imgs">
              {originality.map(item => (
                <div key={item.id} className="originality-item">
                  <h5 className="word">{item.title}</h5>
                  <img src={item.homeBanner} alt={item.bannerTitle} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="timeline-topic">
          <div className="topic-box">
            <img src={topicImgSrc} alt="" />
            <div className="topic-list">
              <h3 className="title">研發課題</h3>
              <ul>
                {topic.map(item => (
                  <li
                    key={item.id}
                    className="topic-item"
                    onMouseEnter={() => onMouseEnter(item.cardBanner)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className="learnmore">
                <p>了解更多</p>
                <img src="http://www.matrixdesign.com/_nuxt/img/more-black.506b37b.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-awards">
          <TitleHeader title="獎項榮譽" />
          <div className="awards-box">
            <ul>
              {awards.slice(0, awards.length / 2).map((item, idx) => (
                <li key={item.id}>
                  <img className="front" src={item.homeHonourBanner} alt="" />
                  <img
                    className="back"
                    src={awards[idx + awards.length / 2].homeHonourBanner}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TimeLine
