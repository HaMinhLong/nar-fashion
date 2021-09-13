const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "@primary-color": "#1175BB",
                  "@font-size-base": "14px",
                  "@layout-header-height": "50px",
                  "@border-radius-base": "2px",
                  "@item-hover-bg": "#1175BB",
                  "@label-color": "#000",
                  "@text-color": "rgba(0, 0, 0, 0.85)",
                  "@disabled-color": "rgba(0, 0, 0, 0.85)",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
