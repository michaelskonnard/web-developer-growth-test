import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: "/en/home",
        destination: "/",
        permanent: true, // Use `true` for 301, `false` for 307 (temporary)
      },
    ];
  },
};

export default nextConfig;
