/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/api",
      destination: "http://192.168.10.157:3000/api/posts",
    },
  ],
};

export default nextConfig;
