// 引入express框架
const express = require('express');
// 创建服务器
const app = express();

// 添加路由
app.get('/checkName', (req, res) => {

  // setTimeout(() => {
  //   let { name } = req.query;
  //   res.set('Access-Control-Allow-Origin', '*');
  //   console.log(name);
  //   if (name === 'admin') {
  //     res.send('用户名已存在')
  //   } else {
  //     res.send('用户名注册成功')
  //   }
  // }, 1300);
console.log('ok');
})

// 监听端口
app.listen(3000, (err) => {
  if (!err) console.log('服务器开启成功');
  else console.log(err);
})