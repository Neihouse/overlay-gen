const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Perform customizations to webpack config
    // Example: Add an alias
    config.resolve.alias['components'] = path.join(__dirname, 'components');

    // Important: return the modified config
    return config;
  },
};
