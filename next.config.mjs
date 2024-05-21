/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: "http://218.237.253.138:3100/api/:path*",
    },
  ],
};

export default nextConfig;
