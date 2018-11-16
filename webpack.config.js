/*
Config file for Webpack bundle
*/

const	path = require('path');

module.exports = {
	//entry file for the bundle
	entry: path.join(__dirname, '/client/src/index.js'),
	//result
	output: {
		path: path.join(__dirname, '/client/dist/'),
		filename: 'main.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: path.join(__dirname, '/client/src'),
			loader: 'babel-loader',
			query: {
				presets: ["react", "es2015"]
			}
		}],
	},
	//start Webpack in watch mode, so Webpack will rebuild the bundle on changes
	watch: true
};
