import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"

import state from "@/store"
import { reader } from "@/configs/helpers"
import { EditorTabs, FilterTabs, DecalTypes } from "@/configs/constants"
import { fadeAnimation, slideAnimation } from "@/configs/motion"
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "./components"

const Customizer = () => {
  const snap = useSnapshot(state)

  const [file, setFile] = useState<string | File>("")

  const [prompt, setPrompt] = useState<string>("")
  const [generatingImg, setGeneratingImg] = useState<boolean>(false)

  interface IActiveFilterTab {
    logoShirt: boolean
    stylishShirt: boolean
  }
  const [activeEditorTab, setActiveEditorTab] = useState<string>("")
  const [activeFilterTab, setActiveFilterTab] = useState<IActiveFilterTab>({
    logoShirt: true,
    stylishShirt: false
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        )
      default:
        return null
    }
  }

  const handleSubmit = async (type: string) => {
    if (!prompt) return alert("Please enter a prompt")

    try {
      setGeneratingImg(true)

      const response = await fetch("http://localhost:8000/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.VITE_APP_OPENAI_API_KEY
        },
        body: JSON.stringify({ prompt })
      })

      const data = await response.json()

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false)
      setActiveEditorTab("")
    }
  }

  const handleDecals = (type: string, result: string) => {
    const decalType = DecalTypes[type]

    state[decalType.stateProperty] = result

    if (!activeFilterTab[decalType.filterTab as keyof typeof activeFilterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
        break
    }

    // after setting the state, activeFilterTab is updated
    setActiveFilterTab(prevState => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName as keyof typeof prevState]
      }
    })
  }

  const readFile = (type: string) => {
    reader(file as File).then(result => {
      handleDecals(type, result as string)
      setActiveEditorTab("")
    })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
            {...slideAnimation("left")}
          >
            <div style={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
              <div className="editortabs-container tabs">
                {EditorTabs.map(tab => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeAnimation}
            style={{ position: "absolute", top: "1.25rem", right: "1.25rem", zIndex: 10 }}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              // customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              customStyle={{ width: "fit-content", padding: "0.5rem 1rem", fontSize: "0.875rem" }}
            />
          </motion.div>

          <motion.div className="filtertabs-container" {...slideAnimation("up")}>
            {FilterTabs.map(tab => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name as keyof typeof activeFilterTab]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
