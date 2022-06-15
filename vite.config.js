import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { svgBuilder } from "./src/plugin/svgIcon/svgBuilder";

export default defineConfig({
  base:"./",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [vue(), svgBuilder("./src/assets/icons/")],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "arco-crud",
      fileName: (format) => `arco-crud.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
