const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = ({ mode }) => {
    return {
        mode,
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        module: {
            rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, ],

        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: mode === 'development' ? 'source-map' : 'none'
    };
};