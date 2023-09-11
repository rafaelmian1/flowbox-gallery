/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: "jsdom",
      setupFiles: ["./src/tests/setup.ts"],
      testMatch: ["./src/tests/**/*.test.tsx"],
      globals: true,
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3000,
    },
  };
});
