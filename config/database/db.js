const mongo = require('mongodb');
const url = "mongodb://localhost:27017/whis";

mongo.connect(url, (err, db) => {
	if (err) throw err;
	console.log("DB created");
	db.createCollection("users", function(err, res) {
		if (err) throw err;
		console.log("Collection created");
		db.close();
	});
});

module.exports = mongo;
