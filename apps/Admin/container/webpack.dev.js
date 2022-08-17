const path = require("path");
const ExternalTemplateRemotesPlugin = require("./ExternalTemplateRemotesPlugin");
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");
const {
  containerModule,
  appModule,
  app1Module,
} = require("../moduleConfigDev");

const devConfig = {
  mode: "development",
  output: {
    publicPath: containerModule.url,
  },
  devServer: {
    port: containerModule.port,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: containerModule.name,
      remotes: {
        app: appModule.federationConfig,
        app1: app1Module.federationConfig,
      },
      shared: [packageJson.dependencies, packageJson.devDependencies],
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
