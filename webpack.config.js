module.exports = {
  entry: {
    bundle: ["babel-polyfill", "./main.jsx"]
  },
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: '[name].js'
  },
module: {
  loaders: [
    { test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-3']
      }},
    { test: /\.css$/, loader: "style-loader!css-loader?modules&sourceMap&localIdentName=[path]___[name]__[local]___[hash:base64:5]" }
  ]
}
};
