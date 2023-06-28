import type { ReactNode } from "react"

export interface dataType {
  title: string
  className: string
  list?: Array<any>
  children?: ReactNode
}
const cases: dataType = {
  title: "項目案例",
  className: "cases",
  list: ["住宅人居", "辦公公共", "酒店度假", "文化教育", "康養醫美", "商業零售", "舊建築改造"]
}
const based: dataType = {
  title: "公司分布",
  className: "based",
  list: ["北京", "深圳", "上海", "成都", "西安"]
}
const contactWay: dataType = {
  title: "聯繫方式",
  className: "contactWay",
  list: [
    "市場部電話: +86 755 82876950",
    "市場部郵箱: zyd@matrixdesign.cn",
    "人事部郵箱: hr@matrixdesign.cn",
    "品牌部郵箱: zyd@matrixdesign.cn"
  ]
}
const headquartered: dataType = {
  title: "總部地址",
  className: "headquartered"
}

const relation: dataType = {
  title: "投資者關係",
  className: "relation",
  list: ["公司公告", "投資者互動平臺"]
}

export { cases, based, contactWay, headquartered, relation }
