/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

module.exports = nextConfig;
