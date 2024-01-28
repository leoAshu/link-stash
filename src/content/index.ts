chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'pasteLink') {
        const focusedInput = document.activeElement

        if (focusedInput) {
            if (focusedInput.tagName === 'INPUT' || focusedInput?.tagName === 'TEXTAREA') {
                ;(focusedInput as HTMLInputElement | HTMLTextAreaElement).value += message.link
            } else {
                ;(focusedInput as HTMLElement).innerText += message.link
            }
        } else {
            console.error('invalid focused element')
            console.error(focusedInput)
        }
    }
})
