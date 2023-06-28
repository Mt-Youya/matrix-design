import React from "react"
import "./index.modules.less"

interface itemType {
  [key: string]: any
  id: number
  cardBanner: string
  authorName?: string
  authorTime?: string
  title: string
  subTitle: string
}
const TopicAndNewsLiCard: React.FC<{ data: itemType }> = ({ data }) => {
  const { id, cardBanner, authorName, authorTime, title, subTitle } = data
  return (
    <li key={id} className="list-item">
      <div className="img">
        <img src={cardBanner} alt="" />
      </div>
      <p className="author">
        <span className="name">{authorName}</span>
        <span className="time">{authorTime?.slice(0, 10)}</span>
      </p>
      <h3 className="item-title">{title}</h3>
      <p className="description">{subTitle} </p>
      <p className="learnmore">了解更多</p>
    </li>
  )
}
export default TopicAndNewsLiCard
