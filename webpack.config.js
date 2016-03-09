module.exports = {
  entry:[
    './main.jsx'
  ],
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
module: {
  loaders: [
    { test: /\.jsx?$/, loaders: ['jsx?harmony']}
  ]
}
};
