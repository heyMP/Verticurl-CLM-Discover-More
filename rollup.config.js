// import typescript from '@rollup/plugin-typescript';
// Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
// import summary from 'rollup-plugin-summary';
import css from 'rollup-plugin-import-css';
import del from 'rollup-plugin-delete';

export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Get any CSS in JS imports
    css(),
    // Print bundle summary
    // summary(),
    // Remove old dist directory
    del({
      targets: 'dist/*'
    }),
  ],
  // Single bundle example
  input: 'bundle.js',
  // // ESM module based dist directory example
  // input: {
  //   'rh-footer': './node_modules/@rhds/elements/elements/rh-footer/rh-footer.js',
  //   'rh-cta': './node_modules/@rhds/elements/elements/rh-cta/rh-cta.js',
  //   'pfe-navigation': './node_modules/@cpelements/pfe-navigation/dist/pfe-navigation.js',
  //   'lightdom': './lightdom.css.js',
  // },
  output: [{
    dir: './dist',
    entryFileNames: '[name].js',
    chunkFileNames: '[name]-chunk.js',
    format: 'esm'
  }],
  preserveEntrySignatures: 'strict',
};
