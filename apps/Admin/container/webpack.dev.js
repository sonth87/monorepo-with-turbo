const path = require("path");
const ExternalTemplateRemotesPlugin = require("./ExternalTemplateRemotesPlugin");
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");
const {
  containerModule,
  cmsModule,
  adminSysModule,
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
        cms: cmsModule.federationConfig,
        adminSys: adminSysModule.federationConfig,
      },
      shared: [packageJson.dependencies, packageJson.devDependencies],
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
