const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        select:false,
        set(val){
        return require('bcrypt').hashSync(val,10)

        }
    },
    sex:{type:String},
    phoneNum:{type:String},
    email:{type:String},
    birth:{type:String},
    introduction:{type:String},
    location:{type:String},
    avator:{type:String },
})

module.exports =mongoose.model('User',schema)
