var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        host: 'localhost',
        port: '3000',
        inline: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            favicon: "realtor-com.png"
        })
    ]
}