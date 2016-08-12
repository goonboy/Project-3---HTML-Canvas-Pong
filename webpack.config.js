const webpack = require ("webpack");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");


module.exports = {
    entry: {
      a: "./entry.js",
      b: ["webpack-dev-server/client?http://0.0.0.0:8000",
          "webpack/hot/only-dev-server"]
          },


    output: {
        path: __dirname,
        filename: "bundle.js"
            },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
                ]
          },

    devServer: {
  		contentBase: process.cwd(),

  		historyApiFallback: true,
  		hot: true,
  		inline: true,
  		progress: true,

  		// display only errors to reduce the amount of output
  		stats: "errors-only",

  		// parse host and port from env so this is easy
  		// to customize
      host: '0.0.0.0',
      port: 80,
  	},
  	plugins: [
  		new webpack.HotModuleReplacementPlugin(),
  		new OpenBrowserPlugin({ url: "http://localhost:8000/webpack-dev-server/bundle"}),
  	]
};
