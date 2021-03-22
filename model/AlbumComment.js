const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tid:{type:String},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    time:{type:String,default:(new Date()).getTime()},
    content:{type:String},
    likecount:{type:String},
})

module.exports =mongoose.model('AlbumComment',schema)
