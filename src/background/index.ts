import { cleanUrl, fetchLinks } from '@src/utils'

const createContextMenu = async () => {
    const storedLinks = await fetchLinks()

    if (storedLinks && storedLinks.length) {
        chrome.contextMenus.create({
            id: 'linkStash',
            title: 'Links',
            contexts: ['editable'],
            documentUrlPatterns: ['http://*/*', 'https://*/*'],
        })

        storedLinks.forEach((link) => {
            chrome.contextMenus.create({
                id: link.id,
                title: link.title,
                parentId: 'linkStash',
                contexts: ['editable'],
            })
        })

        chrome.contextMenus.onClicked.addListener(
            (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab | undefined) => {
                if (tab && tab.id) {
                    chrome.tabs.sendMessage(tab.id, {
                        action: 'pasteLink',
                        link: cleanUrl(storedLinks.filter((link) => link.id === info.menuItemId.toString())[0].url),
                    })
                }
            }
        )
    }
}

chrome.runtime.onInstalled.addListener(createContextMenu)

chrome.runtime.onStartup.addListener(createContextMenu)
