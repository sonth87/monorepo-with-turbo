const path = require("path");
const Dotenv = require("dotenv-webpack");
const { ProvidePlugin } = require("webpack");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      process: "process/browser",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ProvidePlugin({
      React: "react", // automatically import react where needed
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./.env"),
      systemvars: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
