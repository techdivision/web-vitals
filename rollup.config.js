import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

let pluginOptions = [
  resolve({
    jsnext: true,
    browser: true
  }),
  commonjs(),
  babel(),
  uglify()
];

export default [{
  input: './Resources/Private/JavaScript/Tracking.js',
  output: {
    name: 'webVitalsReporter',   // for external calls (need exports)
    file: './Resources/Public/JavaScript/CombinedScripts.js',
    format: 'iife',
  },
  plugins: pluginOptions,
}];