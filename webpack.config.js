/*
 ./webpack.config.js
*/
const path = require("path"); // path utility
const HtmlWebpackPlugin = require("html-webpack-plugin");
// init HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./public/index.html", // archivo de nuestra vista
  inject: "body" // donde insertaremos nuestro script
});
const config = {
  entry: "./src/index.js", // archivo js que codearemos
  output: {
    path: path.resolve("./public"), //resolver el path de salida
    filename: "bundle.js" // archivo js compilado
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@config": path.resolve(__dirname, "src/config"),
      "@utils": path.resolve(__dirname, "src/utils")
    }
  },
  plugins: [HtmlWebpackPluginConfig] // configuración de nuestra vista
};
module.exports = config; //exportamos a webpack nuestra configuración
