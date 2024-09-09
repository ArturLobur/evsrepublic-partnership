import viteReact from "@vitejs/plugin-react";
import path from "path";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact()],
  build: {
    outDir: path.join(__dirname, "build"),
  },
});