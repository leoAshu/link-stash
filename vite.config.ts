import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import makeManifest from './vite-plugins/make-manifest.ts'
import buildContentScript from './vite-plugins/build-content-script.ts'

export default defineConfig({
    resolve: {
        alias: {
            '@src': resolve(__dirname, 'src'),
            '@assets': resolve(__dirname, 'src', 'assets'),
        },
    },
    plugins: [react(), makeManifest(), buildContentScript()],
    build: {
        outDir: 'dist',
        sourcemap: process.env.__DEV__ === 'true',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src', 'popup', 'index.html'),
                background: resolve(__dirname, 'src', 'background', 'index.ts'),
                // content: resolve(__dirname, 'src', 'content', 'index.ts'),
            },
            output: {
                entryFileNames: (chunk) => `src/${chunk.name}/index.js`,
            },
        },
    },
})
