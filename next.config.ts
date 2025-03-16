import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  };
module.exports = {
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/documentation',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
