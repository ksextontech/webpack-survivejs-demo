const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo'
        })
    ],
    devServer: {
        // display only errors to reduce the amount of output
        stats: 'errors-only',

        // parse host and port from environment to allow customization
        //
        // if you use Docker, Vagrant, or Cloud9, set
        // host: options.host || "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // defaults to `localhost`
        port: process.env.PORT, // defaults to 8080
        open: false, // opens the page in browser
        overlay: true, // display overlay in browser for capturing compilation related warnings and errors
        historyApiFallback: false // enable if HTML5 History API based routing is used
    }
};