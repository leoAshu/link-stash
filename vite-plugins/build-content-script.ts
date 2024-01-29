import { PluginOption, build } from 'vite'
import { resolve } from 'path'

/**
 * Build the content script for the extension
 *
 * @returns {PluginOption} - Vite plugin configuration
 */
export default function buildContentScript(): PluginOption {
    return {
        name: 'build-content',
        async buildEnd() {
            await build({
                resolve: {
                    alias: {
                        '@src': resolve(__dirname, '..', 'src'),
                        '@assets': resolve(__dirname, '..', 'src', 'assets'),
                    },
                },
                publicDir: false,
                build: {
                    outDir: 'dist',
                    sourcemap: process.env.__DEV__ === 'true',
                    emptyOutDir: false,
                    rollupOptions: {
                        input: {
                            content: resolve(__dirname, '..', 'src', 'content', 'index.ts'),
                        },
                        output: {
                            entryFileNames: (chunk) => {
                                return `src/${chunk.name}/index.js`
                            },
                        },
                    },
                },
                configFile: false,
            })
            console.log('KWF::Vite Plugin: Content code build scuccessfully')
        },
    }
}
