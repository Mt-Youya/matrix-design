/*
 * @Author: Yonjay dd257248@gmail.com
 * @Date: 2023-01-17 21:01:42
 * @LastEditors: Yonjay dd257248@gmail.com
 * @LastEditTime: 2023-01-30 14:20:14
 * @FilePath: \matrix-design-react\src\layouts\BackToTop\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useRef, useState } from "react"
import "./index.modules.less"

const perimeter = 2 * 20 * Math.PI
const clientHeight = document.body.clientHeight

const BackToTop = () => {
  const toTop = useRef<HTMLDivElement | null>(null)
  const [rate, setRate] = useState<number>(0)
  const transitionBackToTop = () => {
    const allHeight = document.documentElement.scrollHeight
    const rateComputed = ((window.scrollY + clientHeight) / allHeight) * perimeter

    if (toTop.current !== undefined) {
      if (window.scrollY < 200) {
        toTop.current!.style.bottom = "-3rem"
        toTop.current!.style.opacity = "0"
      } else {
        toTop.current!.style.bottom = "6rem"
        toTop.current!.style.opacity = "1"
      }
    }
    setRate(rateComputed)
  }
  const forBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  // const HashChange = (a, b, c) => {
  //   console.log(a, b, c)
  // }

  // window.addEventListener("hashchange", HashChange, false)
  useEffect(() => {
    window.addEventListener("scroll", transitionBackToTop)
    return () => window.removeEventListener("scroll", transitionBackToTop)
  }, [])

  return (
    <div className="back-to-top" ref={toTop} onClick={forBackToTop} title="Back To Top">
      <svg className="top-circle">
        <circle cx="21" cy="21" r="20" strokeDasharray={rate + ", " + perimeter} />
      </svg>
      <svg
        className="top-arrow"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M1.73734 0.5V1.75H14.2373V0.5H1.73734Z" />
        <path
          fill="currentColor"
          d="M15.0669 8.86364L14.1831 9.74752L8.62087 4.18534V15.5426H7.37087V4.18534L1.80869 9.74752L0.924805 8.86364L7.99587 1.79257L15.0669 8.86364Z"
        />
      </svg>
    </div>
  )
}

export default BackToTop
