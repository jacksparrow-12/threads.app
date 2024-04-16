/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      serverActions: {
        enabled: true, // Enables server-side actions
      },
      serverComponentsExternalPackages: ["mongoose"], // Excludes mongoose from client-side bundling for server components
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
        {
          protocol: "https",
          hostname: "utfs.io",
        },
      ],
    },
    // ... other Next.js configurations (if any)   
  };
  
  export default nextConfig;
  