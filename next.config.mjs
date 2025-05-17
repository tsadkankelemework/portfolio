/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    unoptimized: true, // avoids image optimization (needed for static export)
  },
  eslint: {
    ignoreDuringBuilds: true, // optional: skip ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // optional: skip TS errors during build
  },
};

export default nextConfig;
