module.exports = app =>{
    const SongComment = require('../../model/SongComment')
    const MvComment = require('../../model/MvComment')
    const AlbumComment = require('../../model/AlbumComment')

    //单曲评论提交接口
    app.post(`/admin/api/comment/song`,async (req,res) =>{
        const model = await SongComment.create(req.body)
        res.send(model)
    })
    //单曲评论获取接口
    app.get(`/admin/api/comment/song/:tid`,async (req,res) =>{
        const model = await SongComment.find({'tid':req.params.tid}).populate('user_id')
        res.send(model)
    })

    //admin所有单曲评论获取
    app.get(`/admin/api/comment/song/`,async (req,res) =>{
        const model = await SongComment.find().populate('user_id')
        res.send(model)
    })

    //admin单曲评论获取
    app.get(`/admin/api/comment/single/song/:_id`,async (req,res) =>{
        const model = await SongComment.findById(req.params._id).populate('user_id')
        res.send(model)
    })


    //admin  单曲删除接口
    app.delete('/admin/api/comment/song/:id',async (req,res) =>{
        await SongComment.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //admin单曲编辑接口
    app.put('/admin/api/comment/song/:id',async (req,res) =>{
        const model = await SongComment.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })


    //mv评论提交接口
    app.post(`/admin/api/comment/mv`,async (req,res) =>{
        const model = await MvComment.create(req.body)
        res.send(model)
    })
    //mv评论获取接口
    app.get(`/admin/api/comment/mv/:tid`,async (req,res) =>{
        const model = await MvComment.find({'tid':req.params.tid}).populate('user_id')
        res.send(model)
    })

    //admin所有mv评论获取
    app.get(`/admin/api/comment/mv/`,async (req,res) =>{
        const model = await MvComment.find().populate('user_id')
        res.send(model)
    })
    //admin  mv删除接口
    app.delete('/admin/api/comment/mv/:id',async (req,res) =>{
        await MvComment.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //admin 单mv评论获取
    app.get(`/admin/api/comment/single/mv/:_id`,async (req,res) =>{
        const model = await MvComment.findById(req.params._id).populate('user_id')
        res.send(model)
    })

    //admin  mv编辑接口
    app.put('/admin/api/comment/mv/:id',async (req,res) =>{
        const model = await MvComment.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })




    //专辑评论提交接口
    app.post(`/admin/api/comment/album`,async (req,res) =>{
        const model = await AlbumComment.create(req.body)
        res.send(model)
    })
    //专辑评论获取接口
    app.get(`/admin/api/comment/album/:tid`,async (req,res) =>{
        const model = await AlbumComment.find({'tid':req.params.tid}).populate('user_id')
        res.send(model)
    })

    //admin所有专辑评论获取
    app.get(`/admin/api/comment/album/`,async (req,res) =>{
        const model = await AlbumComment.find().populate('user_id')
        res.send(model)
    })
    //admin专辑删除接口
    app.delete('/admin/api/comment/album/:id',async (req,res) =>{
        await AlbumComment.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //admin专辑评论获取
    app.get(`/admin/api/comment/single/album/:_id`,async (req,res) =>{
        const model = await AlbumComment.findById(req.params._id).populate('user_id')
        res.send(model)
    })

    //admin专辑编辑接口
    app.put('/admin/api/comment/album/:id',async (req,res) =>{
        const model = await AlbumComment.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })


}
