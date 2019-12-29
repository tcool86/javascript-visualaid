const path = require("path");
const webpackExtended = require(path.resolve(
  __dirname,
  "config/webpack.config.js"
));

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config = Object.assign(webpackExtended.webProd, config);
      console.log("use prod config");
    } else {
      config = Object.assign(webpackExtended.webDev, config);
      console.log("use dev config");
    }
  }
};
