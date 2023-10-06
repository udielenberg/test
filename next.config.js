/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    webpack: false,
    // images: { unoptimized: true, allowFutureImage: true },
    experimental: {
        mdxRs: true,
    },
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.resolve.fallback.fs = false;
    //     }
    //     return config;
    // },
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    // images: {
    //     loader: 'custom',
    //     loaderFile: './app/image.ts',
    //   },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
// module.exports = nextConfig;
