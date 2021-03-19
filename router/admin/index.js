module.exports = app =>{
    const express =require('express')
    const  jwt = require('jsonwebtoken')
    const AdminUser = require('../../model/AdminUser')
    const User = require('../../model/User')
    const router = express.Router({
        mergeParams:true
    })

    //登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')

    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)
    // app.use('/admin/api/:resource',router)

    //资源提交接口
    router.post('/',async (req,res) =>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    //编辑接口
    router.put('/:id',async (req,res) =>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    //删除接口
    router.delete('/:id',async (req,res) =>{
        await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //资源请求接口
    router.get('/',async (req,res) =>{
        const items = await req.Model.find().limit(10)
        res.send(items)
    })

    //编辑请求接口
    router.get('/:id',async (req,res) =>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })


    //登录提交接口
    app.post('/admin/api/login',async (req,res) =>{
        const {username,password} =req.body
        //1.根据用户名找用户
        const user = await AdminUser.findOne({username}).select('+password')
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
        res.send({token})
    })



    // //客户端用户注册接口
    // router.post('/',async (req,res) =>{
    //     const model = await req.Model.create(req.body)
    //     res.send(model)
    // })

}
