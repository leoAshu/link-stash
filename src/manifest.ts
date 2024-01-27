import type { Manifest } from 'webextension-polyfill'
import pkg from '../package.json'

const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: 'Link Stash',
    version: pkg.version,
    description: pkg.description,
    icons: {
        '16': 'link.png',
        '32': 'link.png',
        '128': 'link.png',
    },
    action: {
        default_icon: 'link.png',
        default_title: 'Link Stash',
        default_popup: 'src/popup/index.html',
    },
    background: {
        service_worker: 'src/background/index.js',
        type: 'module',
    },
    content_scripts: [
        {
            matches: ['http://*/*', 'https://*/*'],
            js: ['src/content/index.js'],
            run_at: 'document_idle',
        },
    ],
    permissions: ['storage', 'contextMenus'],
}

export default manifest
