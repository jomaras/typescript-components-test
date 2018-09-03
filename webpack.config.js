const path = require("path");

module.exports = (env = {}) => {
    const baseConfig = {
        devtool:'source-map',
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" },
                { test: /\.css/, loaders: ['style-loader', 'css-loader']},
                { test: /\.html$/, loader: 'html-loader'},
                { test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            ]
        },
        resolve:{
            extensions:[".js", ".ts", ".tsx"],
        },
        plugins: [],
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };

    const webConfig = Object.assign({}, baseConfig, {
        entry:{
            app: path.join(__dirname, "/src/main"),
        },
        output:{
            path: path.join(__dirname, "/bin/js"),
            filename: "[name].js",
            chunkFilename: "[name].chunk.js",
            publicPath: "/bin/js/"
        }
    });

    return [webConfig];
}