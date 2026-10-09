import { build } from "esbuild";

await build({
    entryPoints: ["apps/extension/src/extension.ts"],
    bundle: true,
    outfile: "dist/extension.js",
    external: ["vscode"],
    format: "cjs",
    platform: "node",
    sourcemap: true
});