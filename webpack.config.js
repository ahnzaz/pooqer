const path = require('path');

module.exports = (() => {
    return {
        mode: 'development',
        entry: {
            // index: './compiled/index.js',
            index: './src/index.ts',
        },
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            }],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'dist/js'),
            filename: 'bundle.js'
        },
    }
})()