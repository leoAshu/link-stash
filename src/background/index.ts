import { Link } from '@src/models'
import { fetchLinks, createContextMenuItem, removeContextMenuItem, addContextMenuItemListener } from '@src/utils'

// menu item creation needed once
const init = async () => {
    // root menu item
    createContextMenuItem('link-stash', 'Links', ['editable'], '', ['http://*/*', 'https://*/*'])

    // child menu items
    const links = await fetchLinks()
    if (links) {
        links.forEach((link) => createContextMenuItem(link.id, link.title, ['editable'], 'link-stash'))
    }

    startUp()
}

// listener setup needed on each startup
const startUp = async () => {
    const links = await fetchLinks()

    if (links) {
        links.forEach((link) => addContextMenuItemListener(link))
    }
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === 'addLink') {
        createContextMenuItem(message.link.id, message.link.title, ['editable'], 'link-stash')
        addContextMenuItemListener(message.link)
    } else if (message.action === 'deleteLink') {
        removeContextMenuItem(message.link.id)
    }
})

chrome.runtime.onInstalled.addListener(init)

chrome.runtime.onStartup.addListener(startUp)
