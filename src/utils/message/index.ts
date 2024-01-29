enum Action {
    Add,
    Delete,
    Paste,
}

interface Message {
    action: Action
    body: { [key: string]: any }
}

interface MessageCallback {
    (message: Message, sender: chrome.runtime.MessageSender): void
}

const sendMessage = (message: Message) => {
    chrome.runtime.sendMessage(message)
}

const sendMessageToTab = (tabId: number, message: Message) => {
    chrome.tabs.sendMessage(tabId, message)
}

const setupOnMessageListener = (callback: MessageCallback) => {
    chrome.runtime.onMessage.addListener(callback)
}

export { Message, MessageCallback, Action, sendMessage, sendMessageToTab, setupOnMessageListener }
