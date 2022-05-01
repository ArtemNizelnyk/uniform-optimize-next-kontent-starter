/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_UA_ID ?? '',
  },
  eslint: {
    // don't auto lint during next build (we run it during CI otherwise)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
