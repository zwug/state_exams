var path = require('path');

module.exports = {
    entry: {
        app: ['./app/views/main.js']
    },
    output: {
        path: './build',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader',
                exclude: /node_modules/
            }
        ]
    }
};