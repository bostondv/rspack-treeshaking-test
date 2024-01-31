import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import rspack from '@rspack/core'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  entry: "./src/index",
  plugins: [new HtmlWebpackPlugin()],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: '[name].webpack_bundle-[contenthash].js',
    publicPath: `/assets/rspack/`,
    chunkFilename: '[name]-[contenthash].webpack_chunk.js',
  },
  experiments: {
    css: true,
    ...(isRunningRspack ? {
        rspackFuture: {
          newTreeshaking: true,
        }
      } : {})
  },
  resolve: {
    mainFields: ['esnext', 'browser', 'module', 'main'],
    modules: [
      path.resolve(path.resolve(__dirname, "src")),
      'node_modules',
    ],
    extensions: [
      '...', // "..." means to extend from the default extensions
      '.jsx',
      '.ts',
      '.tsx'
    ],
  },
  module: {
    rules: [
      {
        test: /(\.(t|j)sx?$)/,
        exclude: [/node_modules/],
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
              cacheCompression: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    corejs: '3.27',
                    modules: false,
                    include: ['transform-classes'],
                  },
                ],
                ['@babel/react', { runtime: 'automatic', importSource: '@emotion/react' }],
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                'graphql-tag',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                [
                  '@emotion',
                  {
                    sourceMap: true,
                    autoLabel: 'never',
                    labelFormat: '',
                    cssPropOptimization: true,
                  },
                ],
              ],
              assumptions: {
                privateFieldsAsProperties: true,
                setPublicClassFields: true,
              },
            },
          },
        ],
      },
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
    }
  },
  mode: 'production',
};

export default config;
