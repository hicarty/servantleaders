import { existsSync } from 'fs'
import { join } from 'path'

const hasSharedUi = existsSync(
  join(process.cwd(), 'node_modules', '@servantleaders', 'ui'),
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: hasSharedUi ? ['@servantleaders/ui'] : [],
  turbopack: hasSharedUi
    ? {}
    : {
        resolveAlias: {
          '@servantleaders/ui': '../../packages/ui/src/index.ts',
          '@servantleaders/ui/navbar': '../../packages/ui/src/site-nav.tsx',
        },
      },
}

export default nextConfig
