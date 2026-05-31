// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force-enable the Nitro deploy plugin on every build. Outside a Lovable sandbox the
  // wrapper otherwise skips Nitro entirely and emits a client-only SPA, which is not a
  // deployable TanStack Start app. The wrapper's own default preset is cloudflare-module;
  // we default to "vercel" so a standard Vercel import builds Build Output API v3 output
  // in .vercel/output. NITRO_PRESET overrides this for other targets (do not hardcode bun).
  nitro: {
    preset: process.env.NITRO_PRESET ?? "vercel",
    // The wrapper forces output.serverDir to "dist/server", which breaks the vercel
    // preset's required Build Output API v3 layout (.vercel/output/...). We restore the
    // canonical locations so a standard Vercel import / `vercel --prebuilt` works. The
    // function dir leaf must stay "__server.func" to match the route dest "/__server"
    // the preset writes into config.json.
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__server.func",
    },
  },
});
