import React from "react"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import TitleHeader from "@/components/TitleHeader"
import "./index.modules.less"

const contentList = [
  {
    title: "硬裝板塊（住宅、辦公、酒店、教育、商業、康養等）",
    cites: "深圳/北京/成都/上海",
    position: "設計總監、項目總監、主創設計師、設計師、助理設計師"
  },
  {
    title: "軟裝板塊",
    cites: "深圳/北京/成都/上海",
    position: "設計總監、項目總監、主創設計師、設計師、助理設計師"
  },
  {
    title: "IDM設計研究中心",
    cites: "深圳",
    position: "設計師、助理設計師"
  },
  {
    title: "商務",
    cites: "深圳/北京/成都/上海",
    position: "商務總監、商務經理、商務助理"
  },
  {
    title: "產品部",
    cites: "深圳",
    position: "產品設計師、電商運營"
  },
  {
    title: "其他",
    cites: "深圳/北京/成都/上海",
    position: "施工圖設計師、效果圖設計師、採購助理"
  }
]
const schoolList = [
  {
    lesson: "《溝通技巧》",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/B2/rBiFUGKNsV6AFg-kAALSYBp9mAM254.jpg",
    teacher: "王兆寳"
  },
  {
    lesson: "《戰略課程》",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/AD/rBiFUGKMRgKARmyvAAK2CZl_aes262.jpg",
    teacher: "王兆寳"
  },
  {
    lesson: "《應需而變 空間設計再思考》",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/96/rBiFUGJrWlSAAIUMAAGXPyDiPN8198.jpg",
    teacher: "於鵬傑"
  },
  {
    lesson: "《築夢烏托邦》",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/96/rBiFUGJrXnaANF7rAATCc1LsJNU947.jpg",
    teacher: "姜雪"
  }
]
const employeeActives = [
  {
    avtivesName: "攝影協會",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/BF/rBiFUGKdWi2AFxAtAAHiOj2qQ_8921.jpg"
  },
  {
    avtivesName: "團隊拓展",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/C1/rBiFUGKfFdKATo4_AAdtmoU2Jss592.jpg"
  },
  {
    avtivesName: "花藝協會",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/BF/rBiFUGKdWkOAa9j3AAF6oerEZMg615.jpg"
  },
  {
    avtivesName: "讀書分享會",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/C1/rBiFUGKfFcyAI9aUAALP1WmYi1s180.jpg"
  },
  {
    avtivesName: ". . .",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/BB/rBiFUGKVzZCAUAN_AAAEh5ZO-uU513.png"
  },
  {
    avtivesName: "公司年會",
    src: "https://erpapi.matrixdesign.cn/group1/M00/02/C1/rBiFUGKfFcOAaiCQAAXMq2f52Rw277.jpg"
  }
]
const JoinUs = () => {
  return (
    <>
      <NavBar />
      <div className="joinUs-container">
        <img
          id="joinUs-banner"
          src="https://erpapi.matrixdesign.cn/group1/M00/02/AD/rBiFUGKMSbyAQvsaAAZeT5oy7rQ205.jpg"
          alt=""
        />
        <div className="joinUs-content">
          <ul className="content-list">
            {contentList.map(({ title, cites, position }, idx) => (
              <li key={idx} className="content-item">
                <h3 className="item-title"> {title}</h3>
                <p className="item-cites">{cites} </p>
                <p className="item-position">{position} </p>
              </li>
            ))}
            <li>
              <h3 className="desc">簡歷投遞郵箱：hr@matrixdesign.cn</h3>
              <h3 className="desc">人力資源電話：鄭小姐 17512029351</h3>
            </li>
            <li>
              <h3 className="desc">郵件標題格式：城市+應聘崗位+姓名</h3>
              <h3 className="desc">(來函請附個人作品，文件不超過20MB)</h3>
            </li>
          </ul>

          <div className="joinUs-school">
            <TitleHeader title="矩阵学堂" />
            <h4 className="supplement">
              矩陣縱橫為員工打造專業的成長發展之路，為矩陣的現在和未來培養人才。
            </h4>
            <ul className="school-wrapper">
              {schoolList.map((item, idx) => (
                <li key={item.lesson + idx}>
                  <div className="img">
                    <img src={item.src} alt={item.lesson} />
                  </div>
                  <h3>{item.lesson} </h3>
                  <p>{item.teacher} </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="joinUs-employee">
            <TitleHeader title="员工活动" />
            <ul className="employee-wrapper">
              {employeeActives.map((item, idx) => (
                <li key={idx}>
                
                  <img src={item.src} alt="" />
                  <div className="shadow">{item.avtivesName} </div>
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

export default JoinUs
