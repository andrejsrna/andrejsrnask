import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: false,
    domains: ['admin.andrejsrna.sk'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/zombo-andrej.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 50000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true
            },
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 20
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name(module: { context: string }) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1] ?? '';
                return `npm.${packageName.replace('@', '')}`;
              },
              priority: 10,
            }
          }
        }
      };
    }
    return config;
  }
};

export default nextConfig;
