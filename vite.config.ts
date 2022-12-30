/// <reference types="vitest" />

import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    include: ["src/**/*.test.{js,ts}"],
  },
};

export default config;
