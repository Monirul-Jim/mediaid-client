/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  images: {
    domains: ["i0.wp.com", "i.ibb.co", "res.cloudinary.com", "encrypted-tbn0.gstatic.com", "d38b044pevnwc9.cloudfront.net"],
  },
};

module.exports = nextConfig;
