/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'breezify.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  transpilePackages: ['three'],
  env: {
    SITE_URL: 'https://breezify.me',
  },
  // Optional: Add redirects if migrating from a previous domain
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ocean-breeze-cleaning.vercel.app',
          },
        ],
        destination: 'https://breezify.me/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 