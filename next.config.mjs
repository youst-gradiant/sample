/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/api/posts",
      destination: "http://218.237.253.138:3100/api/posts",
    },
  ],
};

export default nextConfig;
