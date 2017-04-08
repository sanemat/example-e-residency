const BowerResolvePlugin = require("bower-resolve-webpack-plugin");

module.exports = {
  resolve: {
    plugins: [new BowerResolvePlugin()],
    modules: [
      'bower_components'
    ],
    descriptionFiles: ['bower.json', 'package.json'],
    mainFields: ['main', 'browser']
  },
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  }
};
