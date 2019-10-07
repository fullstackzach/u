'use strict'

const debug = require('debug')('u')
const env = require('../lib/utils/env')
const resolveProjectPath = require('../lib/utils/resolve-project-path')
const TerserPlugin = require('terser-webpack-plugin')

const isDevelopment = env === 'development'

debug('env %s', env)

// https://webpack.js.org/configuration/
module.exports = {
  bail: true,
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      ...require('./webpack-rules/javascript'),
      ...require('./webpack-rules/styles'),
      {
        test: /\.svg$/,
        use: [require.resolve('@svgr/webpack')],
      },
    ],
  },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: 'main.js',
    path: resolveProjectPath('dist'),
  },
  plugins: [],
}
