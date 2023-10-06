const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        library: {
            type: 'commonjs2',
            export: 'default',
        },
        clean: true,
    },
    optimization: {
        minimize: false,
    },
    externals: {
        'left-pad': 'left-pad',
    },
};
