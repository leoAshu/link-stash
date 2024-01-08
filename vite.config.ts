import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import makeManifest from './vite-plugins/make-manifest.ts'

export default defineConfig({
    plugins: [react(), makeManifest()],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src', 'components', 'popup', 'index.html'),
            },
            output: {
                entryFileNames: (chunk) => `src/${chunk.name}/index.js`,
            },
        },
    },
})
