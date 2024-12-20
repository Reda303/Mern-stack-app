const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
{
  userId:{
    type:String,
    reqiured:true
  },
  desc:{
    type:String,
    max:500
  },
  img:{
    type:String,
  },
  likes:{
    type:Array,
    default:[],
  }
},
  { timesamps: true }
);

module.exports = mongoose.model("post", PostSchema);