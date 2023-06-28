import { mock } from "mockjs"

export const userList = mock({
  "data|10": [
    {
      name: "@name",
      cname: "@cname",
      "id|+1": 1,
      avatar: "@image(200x200,@color)"
    }
  ]
})
