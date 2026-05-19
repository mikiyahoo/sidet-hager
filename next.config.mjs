/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  outputFileTracingRoot: process.cwd(),
}

export default nextConfig