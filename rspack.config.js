const path = require('path');
module.exports = (env,argv) =>  {
  // console.log('env:',env)
  // console.log('argv:',argv)
  return {
    context: __dirname,
    entry: {
        main: './dist/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    infrastructureLogging: {
      debug: true
    },
    // target: "node",
    // devServer: {
    //   hot: true
    // },
  }
}