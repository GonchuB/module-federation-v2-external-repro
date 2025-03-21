const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
//const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports = {
    entry: './host/src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: 'http://localhost:3000/', // Host runs on port 3000
    },
    devServer: {
        port: 3000,
    },
    mode: 'production',
    plugins: [
        new BundleStatsWebpackPlugin({
            compare: false,
            baseline: true, // Generates Webpack stats file
            baselineFilepath: '../reports/webpack-stats.json',
            html: true,
            json: false, // Json reports are different from baseline Webpack stats files
            outDir: '../reports',
            stats: {
                assets: true,
                chunks: true,
                modules: true,
                builtAt: true,
                hash: true,
            },
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                remote: 'remote@http://localhost:3001/[window.externalRemote]', // Referenced in host/src/index.html
            },
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: './host/src/index.html',
        }),
    ],
};
