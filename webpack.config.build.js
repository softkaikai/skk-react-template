const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index-spa.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app1.js',
        libraryTarget: "umd",
        library: 'app1Module'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-object-rest-spread"
                            ]
                        }

                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
            },
        ]
    },
    externals: {
        'react': 'React',
        'classNames': 'classNames',
        'react-dom': 'ReactDom',
        'react-router-dom': 'ReactRouterDom',
        'react-router': 'ReactRouter',
        'single-spa-react': 'singleSpaReact',
    }
}