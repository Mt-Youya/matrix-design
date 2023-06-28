// 这段代码是一个分片渲染的函数,可以将一个较大的数组在多个任务中分块渲染,防止长时间卡死页面。

const btn = document.querySelector<HTMLButtonElement>("#btn")!
const datas = new Array<number>(10000).fill(0).map((_, i) => i)

type TTask = (time: number) => boolean
type TConsumer = (item: number, index: number) => void
type TChunkSplitor = (task: (hasTime: TTask) => void) => void

btn.addEventListener("click", () => {
  const consumer: TConsumer = item => {
    const div = document.createElement("div")
    div.textContent = item + ""
    document.body.appendChild(div)
  }
  const chunkSplitor: TChunkSplitor = task => setTimeout(() => task(time => time < 16), 200)
  performChunk(datas, consumer, chunkSplitor)
})

/**
 * 分片渲染
 * @param datas 分片渲染的数组集合(需要渲染的数据)
 * @param consumer 每次需要如何渲染(渲染函数)
 * @param chunkSplitor 分片渲染的时机(分片渲染函数)
 * @returns void 0
 */
function performChunk(datas: number[], consumer: TConsumer, chunkSplitor?: TChunkSplitor): void {
  // 参数归一化
  if (typeof datas === "number") datas = new Array(datas)
  if (datas.length === 0) return
  if (!chunkSplitor && "requestIdleCallback" in window) {
    chunkSplitor = task => requestIdleCallback(idle => task(() => idle.timeRemaining() > 0))
  }
  let i = 0 // 目前应该去除的任务下标
  // 执行一块任务
  function _run() {
    if (i === datas.length) return
    chunkSplitor!(hasTime => {
      const now = Date.now()
      // 这里是关键，如果有空闲时间就执行
      while (hasTime(Date.now() - now) && i < datas.length) {
        // do something...
        consumer(datas[i], i)
        i++
      }
    })
  }

  _run()
}
