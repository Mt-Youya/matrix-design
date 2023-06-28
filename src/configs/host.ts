type apiType = {
  API: string
}
interface enviromentType {
  [key: string]: any
  mock: apiType
  development: apiType
  test: apiType
  production: apiType
}

const enviroment: enviromentType = {
  mock: {
    // 本地mock数据
    API: ""
  },
  development: {
    // 开发环境接口请求
    API: "/api"
  },
  test: {
    // 测试环境接口地址
    API: "https://service-exndqyuk-1257786608.gz.apigw.tencentcs.com"
  },
  production: {
    // 正式环境接口地址
    API: "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com"
  }
}

export default enviroment
