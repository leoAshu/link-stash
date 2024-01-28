chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'pasteLink') {
        const focusedInput = document.activeElement
        if (focusedInput && (focusedInput.tagName === 'INPUT' || focusedInput.tagName == 'TEXTAREA')) {
            ;(focusedInput as HTMLInputElement | HTMLTextAreaElement).value += message.link
        }
    }
})
