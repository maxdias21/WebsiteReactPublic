/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname:'maxdias21.pythonanywhere.com',
            pathname: '/media/**',
        }],
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};


export default nextConfig;
