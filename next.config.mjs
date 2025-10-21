/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Don't run ESLint during production builds to avoid failing on formatting
    // differences in forks or template code. Developers should run `pnpm lint`
    // locally and fix issues before merging.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
