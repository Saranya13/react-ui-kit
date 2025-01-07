/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/blocks/:path*',
            destination: '/blocks-section/:path*',
          },
        ];
      },
};

export default nextConfig;
