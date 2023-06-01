const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
const workboxPlugin = require("workbox-webpack-plugin");
// TODO: Add CSS loaders and babel to webpack.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Webpack Plugin",
      }),
      new workboxPlugin.GenerateSW(),
      new MiniCssExtractPlugin(),
      new InjectManifest({
        swSrc: "./src/sw.js",
        swDest: "service-worker.js",
      }),
      // I may need to add src to the line below
      new WebpackPwaManifest({}),
    ],

    module: {
      rules: [
        {
          test: /\.css$i/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};