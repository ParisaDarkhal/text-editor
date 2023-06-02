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
        swDest: "src-sw.js", // I am not sure about this one. if doesn't work change it to servis-worker.js
      }),
      // creates a manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Just another text editor",
        short_name: "J.A.T.E",
        description: "offline text editor",
        background_color: "#235db5",
        theme_color: "#236db6",
        start_url: "/",
        publicPath: "/",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$i/,
          use: ["style-loader", "css-loader"],
        },
        { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
