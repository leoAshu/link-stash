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
    config,
} from '@src/utils'

const init = async () => {
    // root menu item
    createContextMenuItem(
        config.rootMenuItemId,
        config.rootMenuItemTitle,
        config.contexts,
        '',
        config.documentUrlPatterns
    )

    // child menu items
    const links = await fetchLinks()
    if (links) {
        links.forEach((link) => createContextMenuItem(link.id, link.title, config.contexts, config.rootMenuItemId))
    }

    startUp()
}

const startUp = async () => {
    setupOnMessageListener(onMessageHandler)

    const links = await fetchLinks()
    if (links) {
        links.forEach((link) => addContextMenuItemListener(link))
    }
}

const onMessageHandler: MessageCallback = (message: Message, sender) => {
    if (message.action === Action.Add) {
        createContextMenuItem(message.body.link.id, message.body.link.title, config.contexts, config.rootMenuItemId)
        addContextMenuItemListener(message.body.link)
    } else if (message.action === Action.Delete) {
        removeContextMenuItem(message.body.link.id)
    }
}

onInstalled(init)
onStartup(startUp)
