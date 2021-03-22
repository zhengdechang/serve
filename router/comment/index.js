module.exports = app =>{
    const SongComment = require('../../model/SongComment')
    const MvComment = require('../../model/MvComment')
    const AlbumComment = require('../../model/AlbumComment')

    //单曲评论提交接口
    app.post(`/admin/api/commment/song`,async (req,res) =>{
        const model = await SongComment.create(req.body)
        res.send(model)
    })
    //单曲评论获取接口
    app.get(`/admin/api/commment/song/:tid`,async (req,res) =>{
        const model = await SongComment.find({'tid':req.params.tid}).populate('user_id')
        res.send(model)
    })

    //mv评论提交接口
    app.post(`/admin/api/commment/mv`,async (req,res) =>{
        const model = await MvComment.create(req.body)
        res.send(model)
    })
    //单曲评论获取接口
    app.get(`/admin/api/commment/mv/:tid`,async (req,res) =>{
        const model = await MvComment.find({'tid':req.params.tid}).populate('user_id')
        res.send(model)
    })

    //专辑评论提交接口
    app.post(`/admin/api/commment/album`,async (req,res) =>{
        const model = await AlbumComment.create(req.body)
        res.send(model)
    })
    //单曲评论获取接口
    app.get(`/admin/api/commment/album/:tid`,async (req,res) =>{
        const model = await AlbumComment.find({'tid':req.params.tid}).populate('user_id')
        res.send(model)
    })

}
