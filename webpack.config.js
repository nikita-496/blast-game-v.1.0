const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <html>
      <head>
          <title>Hello Cocos2d-JS</title>
      </head>
      <body>
          <h1>Шаблон отрисовался</h1>
      </body>
      </html>
      `,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
