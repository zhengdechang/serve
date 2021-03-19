module.exports = app =>{
    const SongComment = require('../../model/SongComment')
    const MvComment = require('../../model/MvComment')
    const AlbumComment = require('../../model/AlbumComment')

    //单曲评论提交接口
    app.post(`/admin/api/commment/song`,async (req,res) =>{
        const model = await SongComment.create(req.body)
        res.send(model)
    })

    //mv评论提交接口
    app.post(`/admin/api/commment/mv`,async (req,res) =>{
        const model = await MvComment.create(req.body)
        res.send(model)
    })

    //专辑评论提交接口
    app.post(`/admin/api/commment/album`,async (req,res) =>{
        const model = await AlbumComment.create(req.body)
        res.send(model)
    })

}
