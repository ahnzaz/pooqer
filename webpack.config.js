module.exports = (() => {
    return {
        entry: './compiled/index.js',
        output: {
            path: path.resolve(__dirname, 'bundled'),
            filename: 'bundle.js'
        }
    }
})()