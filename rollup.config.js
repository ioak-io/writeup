import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';

const packageJson = require("./package.json");

const external = [
  ...Object.keys(packageJson.peerDependencies || {}),
  /^@tiptap\//, // explicitly match all Tiptap-related packages
];

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      inlineDynamicImports: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      inlineDynamicImports: true
    }
  ],
  external,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    image(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css']
    })
  ]
};