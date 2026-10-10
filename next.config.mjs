/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/resume", destination: "/cv", permanent: true },
      { source: "/projects", destination: "/#evidence", permanent: true },
      { source: "/experience", destination: "/#background", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/writing/:path*", destination: "/", permanent: true },
      { source: "/pensieve/:path*", destination: "/", permanent: true },
      { source: "/archive", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
