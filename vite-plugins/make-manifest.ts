import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { PluginOption } from 'vite'
import manifest from '../src/manifest.ts'

const outDir = resolve(__dirname, '..', 'public')

export default function makeManifest(): PluginOption {
    return {
        name: 'make-manifest',
        buildEnd() {
            if (!existsSync(outDir)) {
                mkdirSync(outDir)
            }

            const manifestPath = resolve(outDir, 'manifest.json')
            writeFileSync(manifestPath, JSON.stringify(manifest, null, 4))
        },
    }
}
