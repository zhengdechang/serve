const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tid:{type:String},              //所评论的歌曲、专辑、mv的id=
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    time:{type:String,default:(new Date()).getTime()},

})

module.exports =mongoose.model('LikedCollection',schema)
