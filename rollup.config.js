import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import pkg from "./package.json";

export default [
  {
    input: "src/main.js",
    external: ["@kissmybutton/motorcortex"],
    output: [
      { file: pkg.main, format: "cjs", name: "bundle" },
      { file: pkg.module, format: "es", name: "bundle" },
    ],
    plugins: [
        resolve(), 
        babel(), 
        commonjs(),
        json(), 
        terser()
    ],
  },
  {
    input: "src/main.js",
    external: ["@kissmybutton/motorcortex"],
    output: [
      {
        globals: {
          "@kissmybutton/motorcortex": "MotorCortex",
        },
        name: "bundle",
        file: pkg.browser,
        format: "umd",
      },
    ],
    plugins: [
      resolve({ mainFields: ["module", "main", "browser"] }),
      babel(),
      commonjs(),
      json(),
      terser()
    ]
  }
];