import { EuiButtonIcon } from "@elastic/eui"
import React, { useState } from "react"
import HistoryCard from "./history-card"

const list = [
  { text: 2010, isActive: true },
  { text: 2011, isActive: false },
  { text: 2012, isActive: false },
  { text: 2013, isActive: false },
  { text: 2015, isActive: false },
  { text: 2018, isActive: false },
  { text: 2019, isActive: false },
  { text: 2022, isActive: false }
]
export interface listType {
  text: number
  isActive: boolean
}

const History = () => {
  const [processList, setProcessList] = useState<listType[]>(list)
  const onClick = (str: number) => {
    list.forEach(item => {
      item.isActive = false
    })
    const idx = list.findIndex(item => item.text === str)
    list[idx].isActive = true
    setProcessList(list.concat([]))
  }
  return (
    <div className="history-container">
      <h3 className="name">發展歷程</h3>
      <div className="line"></div>
      <HistoryCard data={processList} />
      <div className="history-process">
        {/* <div className="arrow-left"> &lt; </div> */}
        {/* <EuiIcon type="arrowLeft" size="xl" className="arrow-left" /> */}

        <EuiButtonIcon iconType="arrowLeft" aria-label="Next" />
        <div className="process-container">
          <ul>
            {processList.map(({ text, isActive }, idx) => (
              <li key={text + idx} className={`${isActive ? "active" : ""}`}>
                <div className="circle" onClick={() => onClick(text)}></div>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <EuiButtonIcon iconType="arrowRight" aria-label="Next" />
        {/* <div className="arrow-right"> &gt; </div> */}
      </div>
    </div>
  )
}

export default History
