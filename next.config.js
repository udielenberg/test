/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    images: { unoptimized: true, allowFutureImage: true },
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    // images: {
    //     loader: 'custom',
    //     loaderFile: './app/image.ts',
    //   },
};

module.exports = nextConfig;
