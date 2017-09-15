import typescript from 'rollup-plugin-typescript2'
import cleanup from 'rollup-plugin-cleanup'

const entry = process.env.input

export default {
    entry: `src/${entry}.ts`,
    dest: `build/${entry}.js`,
    format: 'es',
    treeshake: false,
    moduleName: 'googleDataStudio',
    plugins: [
        typescript(),
        cleanup({
            comments: 'none',
            extensions: ['.js','.ts']
        })
    ]
}