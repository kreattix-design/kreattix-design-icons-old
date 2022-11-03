import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import ts from 'typescript'
import typescript from 'rollup-plugin-typescript2'
import svg from 'rollup-plugin-svg'
import copy from 'rollup-plugin-copy'

export default {
  input: pkg.source || 'src/index.tsx',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: [
    {
      file: `./${pkg.module}`,
      format: 'es',
      sourcemap: true
    },
    {
      file: `./${pkg.main}`,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    svg(),
    typescript({
      typescript: ts,
      tsconfig: 'tsconfig.json'
    }),
    terser({
      output: {
        comments: false
      }
    }),
    copy({
      targets: [{ src: 'src/icon-svg/*', dest: 'lib/svg/' }]
    })
  ]
}
