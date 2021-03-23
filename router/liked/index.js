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

    //取消收藏
    app.delete('/admin/api/likedalbum/delete/:tid',async (req,res) =>{
        await LikedAlbum.findOneAndDelete({'tid':req.params.tid})
        res.send({
            success:true
        })
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

}
