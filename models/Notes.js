const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
	note:{
		type: String,
		required:true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updateAt: {
		type: Date,
		default: null
	},
	deletedAt: {
		type: Date,
		default: null
	}
});
module.exports = mongoose.model("Notes", NotesSchema);