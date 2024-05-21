/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/:path*",
      destination: "http://218.237.253.138:3100/:path*",
    },
  ],
};

export default nextConfig;
