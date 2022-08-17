const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");
const ExternalTemplateRemotesPlugin = require("./ExternalTemplateRemotesPlugin");
const {
  containerModule,
  cmsModule,
  adminSysModule,
} = require("../moduleConfigProd");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
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

module.exports = merge(commonConfig, prodConfig);
