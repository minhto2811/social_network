const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
    id: ObjectId,
    author: { type: Object, require: true },//account đăng bài
    image: { type: String },
    content: { type: String },
    like: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
}, {
    collection: "post"
});

module.exports = mongoose.model('Post', Post);