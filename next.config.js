/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:5054/api/:slug*',
      },
    ];
  },
};

module.exports = nextConfig;
