import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import nodePolyfills from "rollup-plugin-polyfill-node";
const production = process.env.NODE_ENV === "production";

export const pathResolve = (dir) => fileURLToPath(new URL(dir, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const isEnvProduction = process.env.VITE_USER_NODE_ENV === "production";
  const envParams = { ...env };

  const options = {
    env: envParams,
    isEnvProduction,
    command,
    pathResolve,
  };

  return {
    plugins: [
      vue(),
      !production &&
        nodePolyfills({
          include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")],
        }),
      { env: envParams, isEnvProduction, command },
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
        "@": path.resolve(__dirname, "src"),
        // "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
      },
    },
    base: "./",
    css: {
      preprocessorOptions: {
        scss: {
          //additionalData: '@import"@/assets/css/globalstyle.scss";'
          //👆这样写是不行的。因为如果项目中其他的css文件有@forward关键字，就会提示错误
          additionalData: '@use "@/assets/scss/_init.scss" as *;',
          //👆这样写是可以的，但是要注意
          //!!!!一定要将其他地方引入该css文件的地方删除，如index.html,否则会提示已经加载该module的错误！！！
        },
      },
    },
    define: {
      "process.env": {},
      __APP_ENV__: env.APP_ENV,
    },
    server: {
      cors: true,
      host: true,
      open: true,
    },
    build: {
      rollupOptions: {
        plugins: [
          // ↓ Needed for build
          nodePolyfills(),
        ],
      },
      // ↓ Needed for build if using WalletConnect and other providers
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
