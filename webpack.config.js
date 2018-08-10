const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  resolve: {
    mainFields: ['module', 'main']
  },
  target: 'web'
};
