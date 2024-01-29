const config = {
    rootMenuItemId: 'link-stash',
    rootMenuItemTitle: 'Links',
    contexts: ['editable'] as chrome.contextMenus.ContextType | chrome.contextMenus.ContextType[],
    documentUrlPatterns: ['http://*/*', 'https://*/*'],
}

export default config
