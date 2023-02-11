import adapter from "@sveltejs/adapter-netlify";
import { Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config: Config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $db: "./src/db",
      $lib: "./src/lib",
      $types: "./src/types",
    },
  },
};

export default config;
