import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import viteCompression from "vite-plugin-compression";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
    plugins: [
      vue(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: "test.html", //分析图生成的文件名
        open:true //如果存在本地服务端口，将在打包后自动展示
      }),
      Components({
        dirs: ["src/components"],
        resolvers: [VantResolver()],
        extensions: ["vue"],
        dts: "src/components.d.ts",
      }),
      createSvgIconsPlugin({
        // 指定要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/assets/svg")],
        // 执行icon name的格式
        symbolId: "icon-[dir]-[name]",
      }),
      viteCompression({
        deleteOriginFile: true,
        algorithm: "gzip",
        filter: /\.(js|mjs|json|css)(?<!manifest\.json)$/i,
      }),
      createHtmlPlugin({
        inject: {
          data: {
            ...env,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      minify: "terser",
      target: "es2015",
      assetsInlineLimit: 0,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log"],
        },
      },
      manifest: true,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          sourcemap: false,
          chunkFileNames: `assets/js/[name]-[hash].js`,
          entryFileNames: `assets/js/[name]-[hash].js`,
          assetFileNames: `assets/[ext]/[name]-[hash].[ext]`,
          manualChunks(id): string {
            const regs =
              /(lottie-web-vue|swiper|vant|@vant|@fingerprintjs|axios|crypto-js|i18next)/;
            if (id.includes("node_modules")) {
              const names = id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0];
              if (regs.test(names)) {
                return names.toString();
              }
            }
            if (/(.scss)/.test(id)) {
              return "styles";
            }
            return undefined;
          },
        },
      },
    },
  };
});
