/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/controverse',
  assetPrefix: '/controverse',
  trailingSlash: true,
}

export default nextConfig