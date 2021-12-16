module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            // publicPath: 'assets',
          },
        },
      });
      return config;
    }
  }