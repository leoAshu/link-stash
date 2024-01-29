import { Action, sendMessage, sendMessageToTab, setupOnMessageListener } from './message'
import { createContextMenuItem, removeContextMenuItem, addContextMenuItemListener } from './contextMenu'
import { fetchLinks, storeLinks } from './storage'

/** Some bug: unable to import Message and MessageCallback from message/index */
interface Message {
    action: Action
    body: { [key: string]: any }
}

interface MessageCallback {
    (message: Message, sender: chrome.runtime.MessageSender): void
}
/** */

const onInstalled = (func: any) => {
    chrome.runtime.onInstalled.addListener(func)
}

const onStartup = (func: any) => {
    chrome.runtime.onStartup.addListener(func)
}

export {
    onInstalled,
    onStartup,
    fetchLinks,
    storeLinks,
    Action,
    Message,
    MessageCallback,
    sendMessage,
    sendMessageToTab,
    setupOnMessageListener,
    createContextMenuItem,
    removeContextMenuItem,
    addContextMenuItemListener,
}
