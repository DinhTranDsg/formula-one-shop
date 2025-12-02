import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.footballfanatics.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "f1store.formula1.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
