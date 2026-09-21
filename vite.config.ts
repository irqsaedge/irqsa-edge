import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

const isAndroidBuild = process.env["CAPACITOR_BUILD"] === "true";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    viteTsConfigPaths(),
    viteReact(),
    nitro({
      preset: isAndroidBuild ? "static" : "vercel",
      ...(isAndroidBuild
        ? {
            prerender: {
              routes: [
                "/",
                "/about",
                "/services",
                "/portfolio",
                "/pricing",
                "/faq",
                "/contact",
                "/dashboard",
                "/admin/inbox",
                "/privacy",
                "/terms",
              ],
            },
          }
        : {}),
    }),
  ],
});
