const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Memory optimization for production builds
      if (env === 'production') {
        // Reduce memory usage during build
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                maxSize: 1024000, // ~1MB chunks
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                maxSize: 1024000,
                priority: 10,
                reuseExistingChunk: true,
              },
            },
          },
        };

        // Disable source maps in production to save memory
        webpackConfig.devtool = false;

        // Optimize module resolution
        webpackConfig.resolve = {
          ...webpackConfig.resolve,
          modules: ['node_modules'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        };

        // Increase bundle size limits to 3MB
        webpackConfig.performance = {
          hints: 'warning',
          maxEntrypointSize: 3072000, // 3MB
          maxAssetSize: 3072000, // 3MB
        };
      }

      return webpackConfig;
    },
  },
  devServer: {
    // Reduce memory usage in development
    compress: true,
    hot: true,
    liveReload: false,
  },
};
