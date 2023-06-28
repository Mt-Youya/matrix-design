import React from "react"
import { useSnapshot } from "valtio"
import { AnimatePresence, motion } from "framer-motion"
import { CustomButton } from "./components"
import { headContainerAnimation, headTextAnimation, slideAnimation } from "@/configs/motion"
import state, { StateProps } from "@/store"

const Homie = () => {
  const snap = useSnapshot<StateProps>(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            {/* <img src="./models/map.jpg" alt="logo" /> */}
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block" style={{ overflow: "hidden" }} /> DO IT.
              </h1>
            </motion.div>
            <motion.div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ maxWidth: "28rem", fontWeight: 400, fontSize: "1rem", color: "#4b5563" }}>
                Create your unique and exclusive shrit with ourbrand-new 3D customization tool.
                <strong> Unleash your imagination</strong>
                and define your own style
              </p>
              <CustomButton
                type="filled"
                title="自定义"
                handleClick={() => (state.intro = false)}
                customStyle={{
                  width: "fit-content",
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  lineHeight: "1.25rem"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Homie
