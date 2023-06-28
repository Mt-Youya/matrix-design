import store from "../store"
import { LOGIN } from "../services/api"
import { request, METHOD, removeAuthorization } from "../utils/request"

function postCommonHeader() {
  const user = store.getters.user || {}
  return {
    userId: user.userId || "undefined",
    roleId: user.postId || "null",
    postId: user.postId || "null",
    organizationName: "444",
    organizationId: "333",
    userName: user.userName || "undefined",
    deviceId: "",
    deviceType: "",
    devModuleID: "",
    accessToken: "",
    appVersion: "",
    osVersion: "",
    appIdentifier: "",
    workBench: ""
  }
}
// 登录
export const login = function ({ username = "", password = "", auth_code = null } = {}) {
  return request(
    LOGIN,
    METHOD.POST,
    {
      // username: username.toLowerCase() === 'admin' ? `${username},null` : username,
      // username: auth_code ? `1,` : `${username},null`,
      username,
      password,
      auth_code,
      url: "http://xtotoro.com"
    },
    {
      header: postCommonHeader()
    }
  )
}
