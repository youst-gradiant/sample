/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: "http://218.237.253.139",
      //destination: "http://localhost:3100/api/:path*",
    },
  ],
};

export default nextConfig;
