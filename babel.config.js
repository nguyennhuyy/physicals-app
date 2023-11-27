module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            appRedux: './src/appRedux',
            assets: './src/assets',
            components: './src/components',
            helpers: './src/helpers',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            utils: './src/utils',
            data: './src/data',
          },
        },
      ]
    ],
  };
};
