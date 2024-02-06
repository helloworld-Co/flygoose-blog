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

git add 后执行 yarn commit,一直回车，直至必须输入文字，这个就是 commit 的说明

## 打包流程

在 package.json 平级的目录中 执行 yarn build 生产 .output 文件 本地的话直接执行 pm2 start pm2.config.js 启动服务
需要目录文件

- 生成的.output
- 当前目录的 pm2.config.js

## 专栏 iconfont 替换

```
        {
         rel: 'stylesheet',
         href: '//at.alicdn.com/t/c/font_3420979_f6dbhdrnbpu.css'
        }
     
```
修改nuxt.config.js的href在线地址即可使用自己的iconfont
