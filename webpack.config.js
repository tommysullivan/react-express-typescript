const path = require('path');

module.exports = {
    entry: './src/main/browser/browserMain.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [ /node_modules/, /dist/, /\.idea/ ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: [ /node_modules/, /dist/, /\.idea/ ]
    }
};