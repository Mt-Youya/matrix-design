import React from "react"
import SparkMD5 from "spark-md5"

const createChunks = (file: File, chunkSize: number): Blob[] => {
  const chunks = []
  for (let i = 0, size = file.size; i < size; i += chunkSize) {
    chunks.push(file.slice(i, i + chunkSize))
  }
  return chunks
}

const readHash = (chunks: Blob[]): Promise<string> =>
  new Promise(resolve => {
    const spark = new SparkMD5()
    function _read(i: number) {
      if (i >= chunks.length) return resolve(spark.end())

      const blob: Blob = chunks[i]
      const reader: FileReader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>): void => {
        const bytes = e.target?.result as string
        spark.append(bytes)
        _read(i + 1)
      }
      reader.readAsArrayBuffer(blob)
    }
    _read(0)
  })

const BigFileUpload = () => {
  const fileChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file: File | undefined = e.target?.files?.[0]
    if (!file) return
    const chunks: ReturnType<typeof createChunks> = createChunks(file, 10 * 1024 * 1024)
    const result: Awaited<Promise<string>> = await readHash(chunks)
    console.log(result)
  }
  return (
    <div>
      <input type="file" name="" id="" onChange={fileChange} />
    </div>
  )
}

export default BigFileUpload
