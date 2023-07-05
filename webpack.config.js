var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.tsx',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.tsx', '.ts'],
  },
  target: 'node',
  externals: [
    nodeExternals(),
    {
      'react': 'commonjs react'
    }
  ]
};
