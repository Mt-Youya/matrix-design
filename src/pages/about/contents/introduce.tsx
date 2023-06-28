import React from "react"
import echarts from "@/assets/images/timeline-echarts.png"
import calture from "@/assets/images/timeline-calture.jpg"
import TitleHeader from "@/components/TitleHeader"

const Introduce = () => {
  return (
    <div className="introduce-container">
      <TitleHeader title="關於矩陣縱橫" />
      <div className="introduce-box">
        <div className="introduce-content">
          <div className="introduce">
            <h5>公司簡介</h5>
            <p>
              矩陣縱橫設計股份有限公司，於2010年成立，提供空間設計與軟裝陳設服務，總部設立於深圳，在北京、上海、成都、西安設有分部，經過十余年的發展，矩陣縱橫（Matrix
              Design）已成長為兼具業界影響力和當代代表性的中國設計品牌。
              <br />
              <br />
              自創立之初，矩陣縱橫一直肩負着行業擔當與社會責任，以「踐行人民對美好生活的向往」為目標，以「回歸東方」為品牌使命，致力於推動中國設計走向世界，力求實現環境、社會、文化及經濟效益的設計增值，始終思考以設計賦能呼應人居美好生活，空間設計與軟裝陳設業務涵蓋住宅、辦公、酒店、教育、商業、康養等業態領域。
              <br />
              <br />
              根據業內權威雜誌《Interior Design》於2022年發布的「全球百大設計巨頭排行榜（Top 100
              Giants）」，公司綜合排名位列第17位，住宅領域位列第1位
            </p>
          </div>
          <div className="calture">
            <h5>企業文化</h5>
            <img src={calture} alt="company calture" />
          </div>
        </div>
        <div className="introduce-charts">
          <img src={echarts} alt="company echarts" />
        </div>
      </div>
    </div>
  )
}

export default Introduce
