module.exports = app =>{
    const LikedSong = require('../../model/LikedSong')
    const LikedAlbum = require('../../model/LikedAlbum')
    const LikedArtist = require('../../model/LikedArtist')
    const LikedCollection = require('../../model/LikedCollection')


    //单曲收藏接口
    app.post(`/admin/api/likedsong`,async (req,res) =>{
        const model = await LikedSong.create(req.body)
        res.send(model)
    })
    //单曲获取接口
    app.get(`/admin/api/likedsong/:user_id`,async (req,res) =>{
        const model = await LikedSong.find({'user_id':req.params.user_id}).populate('user_id')
        res.send(model)
    })

    //取消收藏
    app.delete('/admin/api/likedsong/delete/:tid',async (req,res) =>{
        await LikedSong.findOneAndDelete({'tid':req.params.tid})
        res.send({
            success:true
        })
    })
    //admin单曲获取接口
    app.get(`/admin/api/likedsong`,async (req,res) =>{
        const model = await LikedSong.find().populate('user_id')
        res.send(model)
    })
    //admin  单曲删除接口
    app.delete('/admin/api/liked/song/:id',async (req,res) =>{
        await LikedSong.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    //admin 单mv评论获取
    app.get(`/admin/api/liked/single/song/:_id`,async (req,res) =>{
        const model = await LikedSong.findById(req.params._id).populate('user_id')
        res.send(model)
    })

    //admin  mv编辑接口
    app.put('/admin/api/liked/song/:id',async (req,res) =>{
        const model = await LikedSong.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })






    //歌单收藏接口
    app.post(`/admin/api/likedalbum`,async (req,res) =>{
        const model = await LikedAlbum.create(req.body)
        res.send(model)
    })
    //歌单获取接口
    app.get(`/admin/api/likedalbum/:user_id`,async (req,res) =>{
        const model = await LikedAlbum.find({'user_id':req.params.user_id})
        res.send(model)
    })

    //歌单取消收藏
    app.delete('/admin/api/likedalbum/delete/:tid',async (req,res) =>{
        await LikedAlbum.findOneAndDelete({'tid':req.params.tid})
        res.send({
            success:true
        })
    })
    //admin歌单获取接口
    app.get(`/admin/api/likedalbum`,async (req,res) =>{
        const model = await LikedAlbum.find().populate('user_id')
        res.send(model)
    })
    //admin  歌单删除接口
    app.delete('/admin/api/liked/album/:id',async (req,res) =>{
        await LikedAlbum.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    //admin 单歌单评论获取
    app.get(`/admin/api/liked/single/album/:_id`,async (req,res) =>{
        const model = await LikedAlbum.findById(req.params._id).populate('user_id')
        res.send(model)
    })

    //admin  歌单编辑接口
    app.put('/admin/api/liked/album/:id',async (req,res) =>{
        const model = await LikedAlbum.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })



    //歌手收藏接口
    app.post(`/admin/api/likedartist`,async (req,res) =>{
        const model = await LikedArtist.create(req.body)
        res.send(model)
    })
    //歌手获取接口
    app.get(`/admin/api/likedartist/:user_id`,async (req,res) =>{
        const model = await LikedArtist.find({'user_id':req.params.user_id})
        res.send(model)
    })

    //歌手取消收藏
    app.delete('/admin/api/likedartist/delete/:tid',async (req,res) =>{
        await LikedArtist.findOneAndDelete({'tid':req.params.tid})
        res.send({
            success:true
        })
    })

    //admin歌手获取接口
    app.get(`/admin/api/likedartist`,async (req,res) =>{
        const model = await LikedArtist.find().populate('user_id')
        res.send(model)
    })
    //admin  歌手删除接口
    app.delete('/admin/api/liked/artist/:id',async (req,res) =>{
        await LikedArtist.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    //admin 单歌手评论获取
    app.get(`/admin/api/liked/single/artist/:_id`,async (req,res) =>{
        const model = await LikedArtist.findById(req.params._id).populate('user_id')
        res.send(model)
    })

    //admin  歌手编辑接口
    app.put('/admin/api/liked/artist/:id',async (req,res) =>{
        const model = await LikedArtist.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })







    //专辑收藏接口
    app.post(`/admin/api/likedcollection`,async (req,res) =>{
        const model = await LikedCollection.create(req.body)
        res.send(model)
    })
    //专辑获取接口
    app.get(`/admin/api/likedcollection/:user_id`,async (req,res) =>{
        const model = await LikedCollection.find({'user_id':req.params.user_id})
        res.send(model)
    })

    //专辑取消收藏
    app.delete('/admin/api/likedcollection/delete/:tid',async (req,res) =>{
        await LikedCollection.findOneAndDelete({'tid':req.params.tid})
        res.send({
            success:true
        })
    })
    //admin专辑获取接口
    app.get(`/admin/api/likedcollection`,async (req,res) =>{
        const model = await LikedArtist.find().populate('user_id')
        res.send(model)
    })
    //admin  专辑删除接口
    app.delete('/admin/api/liked/collection/:id',async (req,res) =>{
        await LikedArtist.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    //admin 单专辑评论获取
    app.get(`/admin/api/liked/single/collection/:_id`,async (req,res) =>{
        const model = await LikedArtist.findById(req.params._id).populate('user_id')
        res.send(model)
    })

    //admin 专辑编辑接口
    app.put('/admin/api/liked/collection/:id',async (req,res) =>{
        const model = await LikedArtist.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

}
