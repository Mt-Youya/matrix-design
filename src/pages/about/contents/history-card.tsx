import React from "react"
import type { listType } from "./history"
import wordList from "./history-words"
import img2010 from "@/assets/images/about/2010.jpg"
import img2011 from "@/assets/images/about/2011.jpg"
import img2012 from "@/assets/images/about/2012.jpg"
import img2013 from "@/assets/images/about/2013.jpg"
import img2015 from "@/assets/images/about/2015.jpg"
import img2018 from "@/assets/images/about/2018.jpg"
import img2019 from "@/assets/images/about/2019.jpg"
import img2022 from "@/assets/images/about/2022.jpg"

interface imgType {
  [key: string]: string
}
const img: imgType = {
  2010: img2010,
  2011: img2011,
  2012: img2012,
  2013: img2013,
  2015: img2015,
  2018: img2018,
  2019: img2019,
  2022: img2022
}

const HistoryCard: React.FC<{ data: listType[] }> = ({ data }) => {
  const { text } = data.filter(({ isActive }) => isActive)[0]
  const idx = wordList.findIndex(({ title }) => text === title)

  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="title">{wordList[idx].title} </h3>
        <p className="text">{wordList[idx].text} </p>
      </div>
      <img src={img[text as keyof imgType]} alt={text + ""} />
    </div>
  )
}

export default HistoryCard
