//跨域代理前缀
const API_PROXY_PREFIX = "/api"
export const BASE_URL =
  process.env.NODE_ENV === "production" ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL

// NOTE: 这里是api重用

export const LOGIN = `/pc/login`
export const ROUTES = `/routes`

export const SYSTEM_POST_GET = `/base/postManage/systemPosts`
export const POST_TYPES = `/base/postManage/postTypes?_=1582115126330`
