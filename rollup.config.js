
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

const banner= `
/*
  Project: ziko.js
  Author: Zakaria Elalaoui
  Date : 28/01/2024
  Git-Repo : https://github.com/zakarialaoui10/ziko.js
  Git-Wiki : https://github.com/zakarialaoui10/ziko.js/wiki
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/ziko.cjs',
    format: 'cjs',
    banner,
  },{
    file: 'dist/ziko.mjs',
    format: 'es',
    banner,
  },
  {
    file: 'dist/ziko.js',
    format: 'umd',
    name:"Ziko",
    banner,
  },
  {
    file: 'dist/ziko.min.js',
    format: 'umd',
    name:"Ziko",
    banner,
    plugins:[terser({
      output: {
        comments: (node, { type, value }) => type === 'comment2' && value.includes('Author'),
      },
    })]
  },
  
],
  plugins: [
    resolve(), 
    commonjs(),
    babel({
      babelHelpers: 'bundled', // or 'runtime'
      //exclude: 'node_modules/**',
    }), 
  ],
};
