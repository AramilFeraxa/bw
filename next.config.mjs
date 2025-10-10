/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  //assetPrefix: './',
  images: {
    unoptimized: true,
  },
  i18n: undefined,
};

export default nextConfig;
