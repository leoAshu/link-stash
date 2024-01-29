import {
    onInstalled,
    onStartup,
    fetchLinks,
    createContextMenuItem,
    removeContextMenuItem,
    addContextMenuItemListener,
    Action,
    Message,
    MessageCallback,
    setupOnMessageListener,
} from '@src/utils'

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
    setupOnMessageListener(onMessageHandler)

    const links = await fetchLinks()
    if (links) {
        links.forEach((link) => addContextMenuItemListener(link))
    }
}

const onMessageHandler: MessageCallback = (message: Message, sender) => {
    if (message.action === Action.Add) {
        createContextMenuItem(message.body.link.id, message.body.link.title, ['editable'], 'link-stash')
        addContextMenuItemListener(message.body.link)
    } else if (message.action === Action.Delete) {
        removeContextMenuItem(message.body.link.id)
    }
}

onInstalled(init)
onStartup(startUp)
