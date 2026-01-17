/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/TrendwatchAI-Landing-Page---Next.js-14"
      : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/TrendwatchAI-Landing-Page---Next.js-14/"
      : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
