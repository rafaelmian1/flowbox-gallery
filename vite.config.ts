import {defineConfig} from "vite";
import {resolve} from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3000,
    },
    build: {
      lib: {
        entry: resolve(__dirname, "lib/lorem-picsum"),
      },
    },
  };
});
