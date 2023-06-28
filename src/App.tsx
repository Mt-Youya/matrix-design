import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { MapApiLoaderHOC } from "react-bmapgl"
import Home from "./pages/home"
import TimeLine from "./pages/timeline"
import Contact from "./pages/contact"
import Search from "./layouts/NavBar/search"
import About from "./pages/about"
import Services from "./pages/services"
import News from "./pages/news"
import Cases from "./pages/cases"
import Topic from "./pages/topic"
import Login from "./pages/login"
import Join from "./pages/join"
// import Three from "./pages/three"
// import Three2 from "./pages/three/index2"
import Bmap from "./pages/map"
import Gmap from "./pages/map/index2"
import Shirt from "./pages/shirt"
import NotFound from "./pages/Result/404"
import BackToTop from "./layouts/BackToTop"
import "@elastic/eui/dist/eui_theme_light.css"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/navigation"
import "./App.less"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/three" element={<Three />} />
        <Route path="/three2" element={<Three2 />} /> */}
        <Route path="/bmap" element={<Bmap />} />
        <Route path="/gmap" element={<Gmap />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
    </HashRouter>
  )
}

// export default MapApiLoaderHOC({ ak: "eccezvxTO4FXPDrgEvXi9x4AN6RkTFiT" })(App)
export default App
