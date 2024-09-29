import react from "@vitejs/plugin-react";
import path from "path-browserify";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve("src/shared"),
      "@widgets": path.resolve("src/widgets"),
      "@entities": path.resolve("src/entities"),
      "@features": path.resolve("src/features"),
      "@pages": path.resolve("src/pages"),
      "@assets": path.resolve("src/assets"),
      "@redux": path.resolve("src/redux"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
});
