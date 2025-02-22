import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    remotePatterns:[
      {
        hostname:"www.themoviedb.org",
      }
    ]
  }
};

export default nextConfig;
