module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
   plugins: [['react-native-worklets-core/plugin', { "relativeSourceLocation": true }]],
};