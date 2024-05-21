/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/todos/:path*",
      destination: "https://jsonplaceholder.typicode.com",
      //destination: "http://localhost:3100/api/:path*",
    },
  ],
};

export default nextConfig;
