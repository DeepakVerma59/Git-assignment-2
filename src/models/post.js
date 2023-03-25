const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    postID:mongoose.Schema.Types.ObjectId,
    title:{type:String},
    body:{type:String},
    image:{type:String},
    user:{type :mongoose.Schema.Types.ObjectId, ref: "User"}
    
},{timestamps : true})

const Post = mongoose.model("Post",postSchema)

module.exports = Post