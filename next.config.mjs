/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Required for Cloud Run compatibility
    reactStrictMode: true,
    async headers() {
      return [
        {
          // Applies the cache control to all pages
          source: '/(.*)', // All routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'max-age=60, stale-while-revalidate=300', // Set the Cache-Control header
            },
          ],
        },
      ]
    },
  };
  
  export default nextConfig;
  