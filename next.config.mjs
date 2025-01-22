/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/react-ui-kit',
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: '/blocks-section/:path*',
          },
        ];
      },
};

export default nextConfig;
