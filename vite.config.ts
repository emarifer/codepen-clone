import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  base:
    process.env.NODE_ENV === "production"
      ? "/codepen-clone/" // prod
      : "/", // dev
  plugins: [react()],
});
