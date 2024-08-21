# Hello-world Nuxt 3 Starter

## 代码命名规范

- 文件夹小写，多个单词用连字符
- vue 文件除了 index.vue 全部大驼峰
- ts 文件用小驼峰
- 组件均放在 componets 下，与其 page 的目录相对应

## 代码规范

- class 如果是由多个字母组成，用连字符隔开，比如 node-list
- 触发的 dom 事件命名为 handleXxxxClick,handleXxxxChange
- 监听事件问 onXxxxChange

## 提交流程

git add 后执行 git commit -m 'xxx', xxx 这个代表 commit 的说明

## 打包流程

在 `package.json` 平级的目录中 执行 `npm run build` 生产 `.output` 文件 本地的话直接执行 `pm2 start pm2.config.js` 启动服务

##### 注：本地 `pm2` 启动后,在浏览器地址栏通过 `127.0.0.1:58081` 即可访问

需要目录文件

- 生成的.output
- 当前目录的 pm2.config.js

```
// BASE_URL 为接口请求地址
"build": "cross-env BASE_URL=https://flygoose.helloworld.net nuxi build",
```

### BASE_URL 使用

在根目录找到文件 `nuxt.config.ts` 文件添加此配置项可供全局使用（也可添加其他全局变量）

```
runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL + '/api',
    }
}
```

通过 `useRuntimeConfig`方法来获取 `runtimeConfig` 中的 `BASE_URL`,如下所示

```
const config = useRuntimeConfig()
// config.public.BASE_URL 即可获取 runtimeConfig 中的环境变量值
```

## 专栏 iconfont 替换

```
        {
         rel: 'stylesheet',
         href: '//at.alicdn.com/t/c/font_3420979_f6dbhdrnbpu.css'
        }

```

修改 nuxt.config.js 的 href 在线地址即可使用自己的 iconfont
