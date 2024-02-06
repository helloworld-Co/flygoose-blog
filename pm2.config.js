// /* pm2.config.js
//  * pm2 start pm2.config.js --only hello-world
//  */
// module.exports = {
//   apps: [
//     {
//       name: 'hello-world-test', // 测试环境
//       cwd: './', // 当前工作路径
//       script: 'npm', // 实际启动脚本
//       args: 'run start_test', // 参数
//       autorestart: true,
//       watch: true, // 监控变化的目录，一旦变化，自动重启
//       watch_delay: 10000,
//       ignore_watch: ['node_modules', 'static'], // 从监控目录中排除
//       watch_options: {
//         followSymlinks: false,
//         usePolling: true
//       }
//     },
//     {
//       name: 'hello-world', // 正式环境
//       cwd: './', // 当前工作路径
//       script: 'npm', // 实际启动脚本
//       args: 'run start', // 参数
//       autorestart: true,
//       user: 'root',
//       instances: 8, // 启动2个服务进程
//       exec_mode: 'cluster',
//       watch: true, // 监控变化的目录，一旦变化，自动重启
//       watch_delay: 4000,
//       ignore_watch: ['node_modules', 'static'], // 从监控目录中排除
//       watch_options: {
//         followSymlinks: false,
//         usePolling: true
//       }
//     },
//     {
//       name: 'czblog',
//       port: '8080',
//       exec_mode: 'cluster',
//       instances: 'max',
//       script: './.output/server/index.mjs'
//     }
//   ]
// }

module.exports = {
  apps: [
    {
      name: 'czblog',
      port: '58081',
      exec_mode: 'cluster',
      instances: 'max',
      instances: 2,
      script: './.output/server/index.mjs'
    }
  ]
}
