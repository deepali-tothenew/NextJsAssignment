/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wallpapers.com',
          port: '',
          pathname: '/images/featured/**',
        },
      ],
    },
  };

export default nextConfig;
