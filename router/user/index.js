module.exports = app =>{
    const express =require('express')
    const  jwt = require('jsonwebtoken')
    const User = require('../../model/User')
    const router = express.Router({
        mergeParams:true
    })
    const resourceMiddleware = require('../../middleware/resource')


    app.use('/admin/api/rest2/:resource',resourceMiddleware(),router)
    // app.use('/admin/api/:resource',router)

    // //资源请求接口
    // router.get('/',async (req,res) =>{
    //     const items = await req.Model.find().limit(10)
    //     res.send(items)
    // })



    //编辑接口
    app.put('/admin/api/user/change/:id',async (req,res) =>{
        const model = await User.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })


    app.get(`/admin/api/user/change/:id`,async (req,res) =>{
        const model = await User.findById(req.params.id)
        res.send(model)
    })

    //客户端用户注册接口
    router.post('/',async (req,res) =>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    //用户登录提交接口
    app.post('/admin/api/user/login',async (req,res) =>{
        const {username,password} =req.body
        //1.根据用户名找用户
        const user = await User.findOne({username}).select('+password')
        // assert(user , 422 ,"用户不存在")
        if(!user){
            return res.status(422).send({
                message:"用户不存在"
            })
        }

        //2.校验密码
        const isValid =require('bcrypt').compareSync(password,user.password)
        // assert(isValid , 422 ,'密码错误')
        if(!isValid){
            return res.status(422).send({
                message:'密码错误'
            })
        }
        //3.返回token
        const token= jwt.sign({id:user._id,},app.get('secret'))
        const id = user._id
        res.send({token,id,username,user})
    })

    //处理照片插件
    const multer = require('multer')	// 引入 multer模块
    const upload = multer({dest: 'uploads/'})	// 配置图片文件的路径(没有后缀名)
    let fs = require('fs')
    //上传用户头像接口
    const singleMidle = upload.single("head");//一次处理一张head字段名的文件，字段名一定要对应！

    //接收过来的头像文件
    app.post('/admin/api/user/changeImg/:id', singleMidle, function(req, res, next) {
        console.log(req.file);
        let file = req.file;
        //文件改名保存
        // fs.renameSync('uploads/' + file.filename, 'uploads/' + file.originalname);//这里修改文件名字
        fs.renameSync('uploads/' + file.filename, 'uploads/' + req.params.id+".jpg");//这里修改文件名字
        res.send(req.params.id);
    });

    //获得用户头像src
    app.get('/admin/api/user/getImg/:id',function (req,res) {
        res.sendFile(process.cwd()+"/uploads/"+req.params.id+".jpg")//服务器该文件的绝对路径
    });


}
