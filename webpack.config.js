// @ts-check
const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const ROOT_DIR = resolve(__dirname, '.')
const SRC_DIR = resolve(ROOT_DIR, 'src')
const DIST_DIR = resolve(ROOT_DIR, 'dist')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: resolve(SRC_DIR, 'index.tsx'),
  output: {
    path: DIST_DIR
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: resolve(SRC_DIR, 'index.html')
    })
  ]
}

module.exports = config