/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.experiments = {
        asyncWebAssembly: true,
        layers: true // Enable layers experiment
      };
      config.module.rules.push({
        test: /\.wasm$/,
        type: 'webassembly/async'
      });
      return config;
    }
  };
  
  export default nextConfig;
  