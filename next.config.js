const path = require("path")
const glob = require("glob")

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "./components"),
      "@utils": path.resolve(__dirname, "./utils"),
      "@docs": path.resolve(__dirname, "./docs"),
      "@plugins": path.resolve(__dirname, "./plugins"),
      "@hooks": path.resolve(__dirname, "./hooks"),
    }
    return config
  },
}
