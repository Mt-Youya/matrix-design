import React, { ChangeEvent, FC } from "react"
import CustomButton from "./CustomButton"

interface IProps {
  file: File | string
  setFile: (file: File | string) => void
  readFile: (file: string) => void
}

const FilePicker: FC<IProps> = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0]
            if (file) return setFile(file as File)
          }}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        {typeof file !== "string" && (
          <p className="filepicker-p">{file?.name || "No file selected"}</p>
        )}
      </div>
      <div style={{ marginBottom: "1rem", flexWrap: "wrap", gap: ".75rem" }}>
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyle={{ fontSize: "0.75rem", lineHeight: "1rem" }}
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyle={{ fontSize: "0.75rem", lineHeight: "1rem" }}
        />
      </div>
    </div>
  )
}

export default FilePicker
