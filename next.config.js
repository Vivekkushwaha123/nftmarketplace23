/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['nftimage.infura-ipfs.io'],
  },
};

module.exports = nextConfig;