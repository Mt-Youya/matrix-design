import { useState } from "react"
import Footer from "@/layouts/Footer"
import NavBar from "@/layouts/NavBar"
import TitleHeader from "@/components/TitleHeader"
import { EuiPagination } from "@elastic/eui"
import { menuList, contentList } from "./data"
import type { childlistType } from "./data"
import "./index.modules.less"

const Cases = () => {
  const [childList, setChildList] = useState<childlistType[]>(
    menuList[0].childlist
  )
  // const onMouseOver = (data: childlistType[]) => setChildList([...data])
  const onClick = (e: any) => {
    const child = [...e.target.parentElement.children]
    child.forEach((child: HTMLLIElement) => child.classList.remove("active"))
    e.target.classList.add("active")
  }
  return (
    <>
      <NavBar />
      <div className="cases-container">
        <img
          className="cases-banner"
          src="https://mimgs.matrixdesign.cn/site/16611548431111.jpg"
        />
        <div className="cases-box">
          <TitleHeader title="項目案例" />
          <div className="cases-menu">
            <ul className="menu-list">
              {menuList.map(({ id, titleCh, childlist }) => (
                <li
                  key={id}
                  // onMouseOver={() => onMouseOver(childlist)}
                  onClick={onClick}
                >
                  {titleCh}
                </li>
              ))}
            </ul>
            <ul className="menu-child">
              {childList.map(({ id, titleCh }) => (
                <li key={id} onClick={onClick}>
                  {titleCh}
                </li>
              ))}
            </ul>
          </div>
          <div className="cases-content">
            <ul className="content-list">
              {contentList.map((item) => (
                <li key={item.id}>
                  <div className="img">
                    <img src={item.homeBanner} alt="" />
                  </div>
                  <h3 className="item-title">{item.title} </h3>
                  <span className="item-descrition">{item.subTitle} </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pagenation">
            <EuiPagination aria-label="Many pages example" pageCount={9} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cases
