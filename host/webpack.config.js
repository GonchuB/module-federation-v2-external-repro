const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

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
    mode: 'development',
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                remote: 'remote@http://localhost:3001/remoteEntry.js', // Referenced in host/src/index.html
            },
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: './host/src/index.html',
        }),
    ],
};
