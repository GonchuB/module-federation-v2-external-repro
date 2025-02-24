const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
    entry: './remote/src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: 'http://localhost:3001/', // Remote runs on port 3001
    },
    devServer: {
        port: 3001,
        static: {
            directory: __dirname + '/dist', // Serve files from the dist directory
        },
        devMiddleware: {
            writeToDisk: true, // Write files to disk so they’re accessible
        },
    },
    mode: 'development',
    plugins: [
        new ModuleFederationPlugin({
            name: 'remote', // Name of the remote module
            filename: 'remoteEntry.js', // Entry file for the remote
            exposes: {
                './sayHello': './remote/src/index.js', // Expose the sayHello function
            },
        }),
    ],
};
