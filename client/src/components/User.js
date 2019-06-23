const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
username: String,
message: String,
product: String,
price: String,
artist: String,
album: String,
genre: String
})

const user = mongoose.model('User', userSchema,)

module.exports = user;