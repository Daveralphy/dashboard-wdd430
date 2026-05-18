import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore node-pre-gyp HTML files
    config.module.rules.push({
      test: /node-pre-gyp[\\/]lib[\\/]util[\\/]nw-pre-gyp/,
      use: 'ignore-loader',
    });

    config.module.rules.push({
      test: /\.html$/,
      include: /node_modules/,
      use: 'ignore-loader',
    });

    // Mark bcrypt as external to avoid bundling issues
    if (isServer) {
      config.externals = [...(config.externals || []), 'bcrypt'];
    }

    return config;
  },
};

export default nextConfig;
