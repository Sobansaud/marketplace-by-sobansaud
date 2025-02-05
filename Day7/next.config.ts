
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ["cdn.sanity.io"], // Sanity ke images ke liye domain allow karna zaroori hai
  },
    
  };
  


module.exports = nextConfig;
