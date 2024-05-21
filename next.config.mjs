/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/todos/:path*",
      destination:
        "http://soonwidot.co.kr/rank/comment.php?mode=l&rc_id=3&page=0/:path*",
      //destination: "http://localhost:3100/api/:path*",
    },
  ],
};

export default nextConfig;
