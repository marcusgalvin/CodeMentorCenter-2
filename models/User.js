const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  /*username: String,
message: String,
product: String,
price: String,
artist: String,
album: String,
genre: String*/
});

const user = mongoose.model("User", userSchema);

module.exports = user;
