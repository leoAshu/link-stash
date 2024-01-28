chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'pasteLink') {
        const focusedInput = document.activeElement
        if (focusedInput) {
            ;(focusedInput as HTMLElement).innerText += message.link
        }
    }
})
