/** @format */
 
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
 
export default defineConfig({
  envPrefix: "REACT_APP_",
  // @ts-ignore
  plugins: [react()],
  server: {
    open: true,
    port: 3007,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  build: {
    outDir: "build",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
 