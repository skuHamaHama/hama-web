const CracoAlias = require("craco-alias");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", "css"],
    alias: {
      "@components": path.resolve(__dirname + "/src/components"),
      "@css": path.resolve(__dirname + "/public/css"),
    },
  },
};
