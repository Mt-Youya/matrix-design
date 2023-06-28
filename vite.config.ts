import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
// import setting from "./src/settings.json";
import Compression from "vite-plugin-compression" // gzip文件压缩
import svgrPlugin from "vite-plugin-svgr" // svg转react组件
import importToCDN, { autoComplete } from "vite-plugin-cdn-import" // 允许指定 modules 在生产环境中使用 CDN 引入。
import postcssPresetEnv from "postcss-preset-env" // postcss插件
import { viteMockServe } from "vite-plugin-mock" // mock插件

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: "assets", // 打包后的静态资源目录
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js", // 代码分割后的文件名
        entryFileNames: "assets/js/[name].[hash].js", // 入口文件名
        sourcemap: false, // 关闭sourcemap
        // 静态资源文件名  chunkInfo 为静态资源信息
        assetFileNames: chunkInfo => {
          // 用后缀名称进行区别处理
          // 处理其他资源文件名 e.g. css png 等
          const fileExt = path.extname(chunkInfo.name)
          // const modelFile = // 这里没什么用,只是为了区分一下
          //   fileExt === ".gltf" || fileExt === ".glb" || fileExt === ".obj" || fileExt === ".fob"
          let subDir = "images"

          if (fileExt === ".css") {
            subDir = "css"
          }
          return `assets/${subDir}/[name].[hash].[ext]` // 生成的文件名
        },
        manualChunks: (id: string): string => {
          // 手动分割代码块
          if (id.includes("node_modules")) return "vendor" // 第三方库
        }
      }
    },
    minify: true, // 开启压缩(压缩后的代码将会去除注释、空格和其他不必要的字符，以减小文件大小。)
    terserOptions: {
      compress: {
        drop_console: true, // 去掉console
        drop_debugger: true // 去掉debugger
      }
    },
    // 关闭打包后的文件大小提示(压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。)
    // reportCompressedSize: false,
    cssCodeSplit: true, // 开启css分离
    assetsInlineLimit: 1024 * 5, // 小于 5kb 的图片会被转成base64
    emptyOutDir: true // 清空输出目录
  },
  server: {
    /**
     * 请求发出去以后,服务器会返回一个响应,这个响应会被浏览器解析,
     * 如果是跨域就给本地服务器报错,本地服务器发现报错之后自己再和目标服务器发送请求,拿到结果后返回给浏览器
     * 浏览器发现是本地服务器返回的结果,就没有同源策略的限制了,也就不会报错了
     * 总结:同源策略发生在浏览器端,不发生在服务器对服务器端,
     *      所以<狸猫换太子>,用自己的服务器向目标服务器发送请求,拿到结果后返回给浏览器,绕开浏览器的同源策略
     */
    // 反向代理
    proxy: {
      "/api": {
        target: "http://116.62.214.157:8080/", // 代理地址
        changeOrigin: true, // 是否跨域
        rewrite: path => path.replace(/^\/api/, "") // 重写路径
      }
    },
    port: 8080
  },
  // envPrefix: "ENV_APP_", // 环境变量前缀
  resolve: {
    alias: [{ find: "@", replacement: "/src" }] // 设置别名
  },
  plugins: [
    react(),
    svgrPlugin({
      // svg转react组件
      svgrOptions: {} // svgr options
    }),
    // 文件太大再压缩,不然会导致浏览器加载(这里指解压)时间过长
    Compression({ threshold: 1024 * 1024 }), // gzip : over 1024kb compression
    importToCDN({
      modules: [
        // 两种写法
        // {
        //   name: "react", // 模块名称
        //   var: "React", // 全局变量名称 e.g.:  _  -->  loadsh
        //   path: `umd/react.production.min.js` // 模块路径
        // },
        // {
        //   name: "react-dom",
        //   var: "ReactDOM",
        //   path: `umd/react-dom.production.min.js`
        // }
        autoComplete("react"),
        autoComplete("react-dom")
      ]
    }),
    viteMockServe()
  ],
  css: {
    // javascriptEnabled  有什么用？
    // less-loader 5.0 之后，需要设置 lessOptions 选项
    // less-loader 5.0 之前，需要设置 javascriptEnabled 选项
    // lessOptions: {
    //   javascriptEnabled: true,
    // }
    preprocessorOptions: {
      // 配置less（其他样式解析用法一致）
      less: {
        javascriptEnabled: true // 设置为true
      }
    },
    modules: {
      localsConvention: "camelCaseOnly", // 驼峰命名
      generateScopedName: "[name]__[local]___[hash:base64:5]", // 生成的类名
      scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是模块化)
      hashPrefix: "hash", // 生成的类名前缀
      globalModulePaths: [/node_modules/] // 配置哪些模块不需要模块化
    },
    devSourcemap: true, // 开发环境下开启sourcemap
    postcss: {
      plugins: [postcssPresetEnv]
    }
  }
})
