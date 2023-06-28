import { useEffect, useRef, useState } from "react"
import { navBarRouter } from "@/router"
import Logo from "@/assets/images/logo.png"
import LogoDark from "@/assets/images/logo-dark.png"
import "./index.modules.less"
import { NavLink } from "react-router-dom"
import navData from "./navData"

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(true)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const nav = useRef<HTMLElement | null>(null)
  const onSearchChange = () => {
    // return true
  }
  const transitionNavBar = () => {
    // console.log(nav);
    if (nav.current !== undefined) {
      const y = window.scrollY
      // console.log(isNavShowing)
      if (y < 200) {
        setIsNavShowing(true)

        // return nav.current!.style.marginTop = "0"
      } else {
        setIsNavShowing(false)
        // return nav.current!.style.marginTop = "-60px"
      }
    }
  }
  const onFocusChange = () => setIsFocus((prve) => !prve)
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  })
  return (
    <nav
      className={`navbar-container${isNavShowing ? "" : " fixed"}${
        isFocus ? " wide" : ""
      }`}
      ref={nav}
    >
      <div className="navbar-logo">
        <NavLink to="/home">
          <img src={isNavShowing ? Logo : LogoDark} alt="MatrixDesign Logo" />
        </NavLink>
      </div>
      <div className="navbar-nav">
        <ul>
          {navBarRouter.map(({ path, meta }, idx) => (
            <li key={path + idx}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                {meta?.title}
              </NavLink>
              <div className="nav-banner">
                <ul className="nav-menu">
                  {navData
                    .find((child) => child.path === path)
                    ?.children?.map(({ typeId, titleCh }) => (
                      <li key={typeId + titleCh}>{titleCh} </li>
                    ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-search">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          onFocus={onFocusChange}
          onBlur={onFocusChange}
        />
      </div>
    </nav>
  )
}

export default NavBar
