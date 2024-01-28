const sendMessage = (message: any, responseCallback?: (response: any) => void) => {
    chrome.runtime.sendMessage(message, responseCallback)
}

export { sendMessage }
