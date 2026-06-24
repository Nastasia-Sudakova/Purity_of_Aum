// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const common = require('./webpack.common.js')
// const { merge } = require('webpack-merge')

// module.exports = merge(common, {
//     mode: 'production'
// })

// const HtmlWebpackPlugin({
//   filename: 'index.html',
//   template: './src/index.html'
// })

// config/webpack.prod.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    
    // 👇 Добавляем плагин внутрь конфигурации, с ключевым словом "new"
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
});