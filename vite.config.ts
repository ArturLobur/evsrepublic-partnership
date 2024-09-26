import viteReact from "@vitejs/plugin-react";
import path from "path";
import {defineConfig} from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  build: {
    outDir: path.join(__dirname, "build"),
  },
});