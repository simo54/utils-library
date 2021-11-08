const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'utils-library',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // If you are using TypeScript: /\.tsx?$/
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
},
resolve: {
  extensions: ['.tsx', '.ts', '.jsx', 'js']
},
}