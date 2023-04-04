// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = (env, argv) => {
  return {
    externals: {
      '@nestjs/common': '"@nestjs/common"',
      '@nestjs/core': '"@nestjs/core"',
      tslib: '"tslib"',
    },
    externalsPresets: { node: true },
    context: __dirname,
    entry: {
      main: './dist/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    infrastructureLogging: {
      debug: false,
    },
    target: 'node',
  };
};
