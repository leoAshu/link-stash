import { Action, Message, MessageCallback, setupOnMessageListener } from '@src/utils'

const onMessageHandler: MessageCallback = (message: Message, sender) => {
    if (message.action === Action.Paste) {
        const focusedInput = document.activeElement

        if (focusedInput) {
            if (focusedInput.tagName === 'INPUT' || focusedInput.tagName === 'TEXTAREA') {
                ;(focusedInput as HTMLInputElement | HTMLTextAreaElement).value += message.body.link
            } else {
                ;(focusedInput as HTMLElement).innerText += message.body.link
            }
        } else {
            console.error('invalid focused element')
            console.error(focusedInput)
        }
    }
}

setupOnMessageListener(onMessageHandler)
