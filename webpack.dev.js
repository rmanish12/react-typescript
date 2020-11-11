const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const devConfig = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    devtool: 'source-map'
})

console.log('devConfig: ', devConfig)
module.exports = devConfig