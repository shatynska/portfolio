/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  i18n: {
    locales: ["en-US", "ua"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
