module.exports = {
  entry: './src/handler.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: '.webpack',
    filename: 'handler.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
};
