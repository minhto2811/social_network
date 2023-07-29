const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Account = new Schema({
    id: ObjectId,
    name: { type: String, require: true },
    image: { type: String },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    admin: { type: Boolean, default: false },
    favourite: { type: [String] }
}, {
    collection: "account"
});

module.exports = mongoose.model('Account', Account);