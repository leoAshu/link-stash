import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import makeManifest from './vite-plugins/make-manifest.ts'

export default defineConfig({
    resolve: {
        alias: {
            '@src': resolve(__dirname, 'src'),
            '@assets': resolve(__dirname, 'src', 'assets'),
        },
    },
    plugins: [react(), makeManifest()],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src', 'popup', 'index.html'),
            },
            output: {
                entryFileNames: (chunk) => `src/${chunk.name}/index.js`,
            },
        },
    },
})
