const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-Import');

module.exports = {
  plugins: [
    postcssCssNext,
    postcssImport
  ]
};
