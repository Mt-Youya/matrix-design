import React, { memo } from "react"
// import { Link } from "react-router-dom";

import style from "./index.module.less"

enum ECode {
  forbidden = 403,
  notFount = 404,
  error = 500
}

interface IErrorPageProps {
  code: ECode
  title?: string
  desc?: string
}

const errorInfo = {
  [ECode.forbidden]: {
    title: "403 Forbidden",
    desc: "抱歉，您无权限访问此页面"
  },
  [ECode.notFount]: {
    title: "404 Not Found",
    desc: "抱歉，您访问的页面不存在。"
  },
  [ECode.error]: {
    title: "500 Internal Server Error",
    desc: "抱歉，服务器出错啦！"
  }
}

const ErrorPage: React.FC<IErrorPageProps> = props => {
  const info = errorInfo[props.code]
  return (
    <div className={style.errorBox}>
      <div className={style.title}>{info?.title}</div>
      <div className={style.description}>{info?.desc}</div>
    </div>
  )
}

export default memo(ErrorPage)
