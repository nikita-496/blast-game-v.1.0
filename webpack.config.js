const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <html>
      <head>
          <title>Hello Cocos2d-JS</title>
      </head>
      <body>
        <canvas id="gameCanvas" width="1366" height="700"></canvas>
        <script src="libs/cocos2d-js-v3.13-lite.js"> </script>
      </body>
      </html>
      `,
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './libs/cocos2d-html5/cocos2d-js-v3.13-lite.js', to: 'libs' },
        { from: './project.json', to: './' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
};
