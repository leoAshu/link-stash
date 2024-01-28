import { Link } from '@src/models'
import { cleanUrl } from '..'

const createContextMenuItem = (
    id: string,
    title: string,
    contexts: chrome.contextMenus.ContextType | chrome.contextMenus.ContextType[],
    parentId?: string,
    documentUrlPatterns?: string[]
) => {
    console.log('create MenuItem')
    console.log(id)
    console.log(title)

    if (parentId) {
        chrome.contextMenus.create(
            {
                id: id,
                title: title,
                contexts: contexts,
                parentId: parentId,
                documentUrlPatterns: documentUrlPatterns,
            }
            // () => chrome.runtime.lastError
        )
        console.log('created Child MenuItem')
    } else {
        chrome.contextMenus.create(
            {
                id: id,
                title: title,
                contexts: contexts,
                documentUrlPatterns: documentUrlPatterns,
            }
            // () => chrome.runtime.lastError
        )
        console.log('created Root MenuItem')
    }
}

const removeContextMenuItem = (id: string) => {
    chrome.contextMenus.remove(id)
}

const addContextMenuItemListener = (link: Link) => {
    chrome.contextMenus.onClicked.addListener(
        (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab | undefined) => {
            if (tab && tab.id && info.menuItemId === link.id) {
                console.log(info.menuItemId)
                console.log(link)

                chrome.tabs.sendMessage(tab.id, {
                    action: 'pasteLink',
                    link: cleanUrl(link.url),
                })
            }
        }
    )
}

export { createContextMenuItem, removeContextMenuItem, addContextMenuItemListener }
