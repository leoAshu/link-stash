import { Link, cleanUrl } from '@src/models'
import { Action, sendMessageToTab } from '..'

const createContextMenuItem = (
    id: string,
    title: string,
    contexts: chrome.contextMenus.ContextType | chrome.contextMenus.ContextType[],
    parentId?: string,
    documentUrlPatterns?: string[]
) => {
    if (parentId) {
        chrome.contextMenus.create({
            id: id,
            title: title,
            contexts: contexts,
            parentId: parentId,
            documentUrlPatterns: documentUrlPatterns,
        })
    } else {
        chrome.contextMenus.create({
            id: id,
            title: title,
            contexts: contexts,
            documentUrlPatterns: documentUrlPatterns,
        })
    }
}

const removeContextMenuItem = (id: string) => {
    chrome.contextMenus.remove(id)
}

const addContextMenuItemListener = (link: Link) => {
    chrome.contextMenus.onClicked.addListener(
        (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab | undefined) => {
            if (tab && tab.id && info.menuItemId === link.id) {
                sendMessageToTab(tab.id, {
                    action: Action.Paste,
                    body: { link: cleanUrl(link.url) },
                })
            }
        }
    )
}

export { createContextMenuItem, removeContextMenuItem, addContextMenuItemListener }
