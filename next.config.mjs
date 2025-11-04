/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // crucial for static export
  images: {
    unoptimized: true, // disable Next.js Image Optimization (not supported in static export)
  },
};

export default nextConfig;
