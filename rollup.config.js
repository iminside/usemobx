import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import clear from 'rollup-plugin-delete'
import pkg from './package.json' assert { type: 'json' }

const extensions = ['.ts', '.tsx']

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            autoExternal(),
            resolve({
                extensions,
            }),
            babel({
                extensions,
                babelHelpers: 'bundled',
            }),
            commonjs(),
            clear({
                targets: 'dist/*',
                runOnce: true,
            }),
        ],
    },
]
