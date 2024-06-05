import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from  '@haensl/rollup-plugin-local-resolve'; 
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

import packageJson from './package.json';

const outputCommonConf = {
  sourcemap: 'inline',
  globals: {
    react: 'React'
  }
};

 


export default [
    {
        input: "src/ScriptTag/index.tsx",
        output: [
          {
            file: packageJson['umd:main'],
            format: 'umd',
            name: 'ScriptTag',
            sourcemap: true,
            ...outputCommonConf
          },
          {
            file: packageJson.main,
            format: 'cjs',
            ...outputCommonConf,
            exports: 'auto'
          },
          {
            file: packageJson.module,
            format: 'es',
          
            ...outputCommonConf
          },
        ],
        plugins: [
           
            babel({ 
            babelHelpers: 'external',
            presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
          }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json",
            typescript: require("typescript"),
          }),
            peerDepsExternal(),
            localResolve(),

            terser(),
            filesize(),
        ],
        
        external: ["react", "react-dom", "styled-components"]
    }
];
