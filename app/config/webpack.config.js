const path = require("path");
const webDev = require(path.resolve(__dirname, 'webpack.dev.js'));
const webProd = require(path.resolve(__dirname, 'webpack.prod.js'));
module.exports = {
	webDev,
	webProd
};
