import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";


// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactjs-template',
  optimizeDeps: {
    esbuildOptions: {
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                process: false,
            }),
            NodeModulesPolyfillPlugin(),
        ],
    },
  },
resolve: {
        alias: {
            "~@fontsource/ibm-plex-mono": "@fontsource/ibm-plex-mono",
            "~@fontsource/inter": "@fontsource/inter",
        },
    },
  plugins: [
    // Allows using React dev server along with building a React application with Vite.
    // https://npmjs.com/package/@vitejs/plugin-react-swc
    react(),
    // Allows using the compilerOptions.paths property in tsconfig.json.
    // https://www.npmjs.com/package/vite-tsconfig-paths
    tsconfigPaths(),
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
     basicSsl(),
  ],
  publicDir: './public',
  server: {
    // Uncomment this line if you want to expose your dev server and access it from the devices
    // in the same network.
    // host: true,
  },
});

