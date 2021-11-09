/*
注意这个ts-loader必须是要在8.2.0版本之下才不会报错
*/
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.ts'
    },
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },{
                test:/\.ts?$/,
                use:[{
                    loader:'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
