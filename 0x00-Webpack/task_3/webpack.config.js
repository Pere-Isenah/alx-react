const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
        header: path.resolve(__dirname, './modules/header/header.js'),
        body: path.resolve(__dirname, './modules/body/body.js'),
        footer: path.resolve(__dirname, './modules/footer/footer.js')


      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true
      },
          optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
      plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['image-webpack-loader','file-loader']
        },
        ],
      },
      devServer: {
        static: './public',
        port:8564
      },
};
