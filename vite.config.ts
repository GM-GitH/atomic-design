import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import dts from "vite-plugin-dts"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-storybook",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd", "cjs", "iife"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        extend: true
      }
    }
  }
})
