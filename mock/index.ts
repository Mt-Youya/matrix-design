import type { MockMethod } from "vite-plugin-mock"
import { userList } from "./request"

export default [
  {
    url: "/api/getUser",
    method: "get",
    responese: () => {
      return {
        code: 200,
        msg: "success",
        data: {
          name: "admin"
        }
      }
    }
  },
  {
    url: "/api/getUserList",
    method: "post",
    responese: () => {
      return {
        code: 200,
        msg: "success",
        data: userList
      }
    }
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      msg: "success",
      data: {
        name: "vben"
      }
    }
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = ""
      await new Promise(resolve => {
        req.on("data", chunk => {
          reqbody += chunk
        })
        req.on("end", () => resolve(undefined))
      })
      res.setHeader("Content-Type", "text/plain")
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    }
  }
] as MockMethod[]
