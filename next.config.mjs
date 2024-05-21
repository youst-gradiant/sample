/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/:path*",
      destination: "http://192.168.10.157:3100/:path*",
    },
  ],
};

export default nextConfig;
