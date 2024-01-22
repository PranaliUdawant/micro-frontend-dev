const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  // filename: "./index.html",
});
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "react-bundle.js",
    path: path.resolve(__dirname, "dist"),
    scriptType: "text/javascript",
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Microfrontend2",
      // name: "CountryList",
      filename: "remoteEntry.js",
      exposes: {
        "./CountryList": "./src/index.js",
      },
    }),
  ],
};
