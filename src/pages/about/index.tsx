import Footer from "@/layouts/Footer/index"
import NavBar from "@/layouts/NavBar"
import Introduce from "./contents/introduce"
import History from "./contents/history"
import Parterner from "./contents/parterner"
import AwardsHonors from "./contents/awards-honors"
import Banner from "@/assets/images/timeline-banner.jpg"
import "./index.modules.less"

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <img src={Banner} alt="company" id="company" />
        <Introduce />
        <History />
        <Parterner />
        <AwardsHonors />
      </div>
      <Footer />
    </>
  )
}

export default About
