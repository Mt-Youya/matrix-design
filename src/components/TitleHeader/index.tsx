import React from "react"
import "./index.modules.less"

interface IProps {
  title: string
}
const TitleHeader: React.FC<IProps> = ({ title }) => {
  return (
    <div className="title-header">
      <h3 className="name">{title}</h3>
      <div className="line"></div>
    </div>
  )
}

export default TitleHeader
