const express = require("express")

const app = express()
// const cors = require('cors')

app.use(require('cors')())
// app.use(cors({
//     origin: 'http://127.0.0.1', //webpack打包后会生成index.html和static目录，我直接放在本地启动的nginx静态目录html下用来运行webpack打包文件，所以Origin地址为http://127.0.0.1
//     allowedHeaders: 'Origin, x-requested-with, Content-Type, X-Token', //X-Token为自定义的头字段
//     credentials: true //设置成true 请求中才会带上cookie信息，否则请求失败
// }));


app.use(express.json())

app.set('secret','sdasdsadsad')

require('./router/admin')(app)
require('./router/user')(app)
require('./router/comment')(app)
require('./router/liked')(app)
require('./plugins/db')(app)


app.listen(3001,() =>{
    console.log('http://localhost:3001')
})