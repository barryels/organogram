import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [solidPlugin()],
    server: {
      port: parseInt(process.env.VITE_PORT || "3000"),
    },
    build: {
      target: "esnext",
    },
  });
};
