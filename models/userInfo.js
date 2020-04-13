var mongoose = require("mongoose");

var userInfoSchema = new mongoose.Schema({
	ipAddress: String,
	capacity: Number,
	lat: Number,
	lon: Number,
	query: Number
});

module.exports = mongoose.model("userInfo", userInfoSchema);