const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

module.exports = async function () {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig(__dirname);

  return {
    resolver: {
      assetExts: [...assetExts, "ttf"],
    },
    watchFolders: [
      path.resolve(__dirname, "assets"),
    ],
  };
};

