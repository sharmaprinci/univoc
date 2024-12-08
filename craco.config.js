// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // This resolves the @ alias to the src folder
      },
    },
  },
};
