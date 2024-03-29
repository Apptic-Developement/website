// imports
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// deno adapter
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: deno(),
});
