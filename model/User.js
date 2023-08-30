/*
 * @Description: 
 * @Author: Devin
 * @Date: 2023-08-30 14:00:04
 */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val) {
      return bcrypt.hashSync(val, 10);
    },
  },
  sex: { type: String },
  phoneNum: { type: String },
  email: { type: String },
  birth: { type: String },
  introduction: { type: String },
  location: { type: String },
  avator: { type: String },
});

module.exports = mongoose.model("User", schema);
