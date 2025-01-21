/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Add Sanity's CDN to the list of allowed image domains
    },
  };
  
  export default nextConfig // Export the configuration
  