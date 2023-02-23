import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";
import istanbul from "vite-plugin-istanbul";

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      solidPlugin(),
      istanbul({
        include: "src/*",
        exclude: ["node_modules", "test/"],
        extension: [".js", ".ts", ".jsx", ".tsx"],
      }),
    ],
    base: process.env.VITE_BASE || "/",
    server: {
      port: parseInt(process.env.VITE_SERVER_PORT || "3000"),
    },
    build: {
      target: "esnext",
    },
  });
};
