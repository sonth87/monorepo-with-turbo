const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('./package.json');
const ExternalTemplateRemotesPlugin = require('./ExternalTemplateRemotesPlugin');
const { containerModule, appModule, app1Module } = require('../../../moduleConfigProd');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: containerModule.name,
      remotes: {
        app: appModule.federationConfig,
        app1: app1Module.federationConfig,
      },
      shared: packageJson.dependencies,
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);