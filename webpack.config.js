const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const { ContextReplacementPlugin } = require('webpack');

const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const host = process.env.HOST || '0.0.0.0';

const plugins = [
  new HtmlWebPackPlugin({
    template: './public/index.html',
  }),
  new ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ro/),
  // new BundleAnalyzerPlugin(),
];

if (mode === 'production') {
  plugins.push(new CleanWebpackPlugin());
  plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          globOptions: {
            ignore: ['**/content/**', '**/images/**', '**/videos/**'], // Ignore everything inside /assets/content
          },
        },
      ],
    })
  );
}

module.exports = {
  mode: mode,
  entry: './src/index.js',
  devtool: mode === 'development' ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpg|gif|pdf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
              jpg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    host,
  },
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
    },
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  plugins: plugins,
  optimization: {
    minimize: true,
  },
};
