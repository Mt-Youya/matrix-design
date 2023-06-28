import React, { FC } from "react"
import CustomButton from "./CustomButton"

interface IProps {
  prompt: string
  setPrompt: (prompt: string) => void
  generatingImg: boolean
  handleSubmit: (type: string) => void
}

const AIPicker: FC<IProps> = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyle={{ fontSize: "0.75rem", lineHeight: "1rem" }}
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyle={{ fontSize: "0.75rem", lineHeight: "1rem" }}
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyle={{ fontSize: "0.75rem", lineHeight: "1rem" }}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
