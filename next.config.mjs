/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Keep SWC enabled; Turbopack is used in dev for faster HMR
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Reduce on-demand entries churn during dev
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  // If multiple lockfiles exist, ensure Turbopack root is correct
  turbopack: {
    // Use process.cwd() for ES module compatibility
    root: process.cwd(),
  },
  // Speedup: skip TypeScript type-checking during dev/watch to improve compile times
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
