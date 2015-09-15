var path = require("path");
var root = __dirname;

// app structure
var appPaths = {
    dist: "build",
    src: "src",
    app: "src/application",
    modules: "src/modules",
    components: "src/components",
    vuestrap: "node_modules/vuestrap"
};

// export config
module.exports = {
    entry: [path.join(root, "/src/main.js")],
    themeLoader: {
        themes: [ "./src/custom-theme.scss", "./node_modules/vuestrap/themes/default.scss"]
    },
    resolve: {
        root: [
            path.resolve(root, appPaths.src), 
            path.resolve(root, appPaths.app), 
            path.resolve(root, appPaths.modules),
            path.resolve(root, appPaths.components),
            path.resolve(root, appPaths.vuestrap),
        ],
        extensions: ["", ".js", "css", "scss"]
    },
    module: {
        loaders: [
        // compile styles in components and make them aware of the theme variables (via theme-loader)
        {
            test: /\.scss$/,
            exclude: /(src|bower_components|components)/,
            loader: "style!css!autoprefixer-loader!sass!vuestrap-theme-loader"
        },
        // compile styles in application
        {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components|components)/,
            loader: "style!css!autoprefixer-loader!sass"
        }, 
        {
            test: /\.html$/,
            loader: "html"
        }]
    },
    output: {
        filename: "build.js",
        path: path.join(root, appPaths.dist),
    },
};