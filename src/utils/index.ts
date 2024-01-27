import { fetchLinks, storeLinks } from './storage'

const cleanUrl = (url: string) => {
    try {
        const urlObject = new URL(url)
        const parts = urlObject.hostname.split('.')

        if (parts[0] === 'www') {
            parts.shift()
        }

        return parts.join('.') + urlObject.pathname
    } catch (error) {
        return url
    }
}

export { cleanUrl, fetchLinks, storeLinks }
