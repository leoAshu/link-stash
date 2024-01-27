import { Link } from '@src/models'

const fetchLinks = async (): Promise<Link[]> => {
    const storedLinks = await chrome.storage.sync.get('links')
    return storedLinks['links']
}

const storeLinks = async (links: Link[]) => {
    await chrome.storage.sync.set({ links })
}

export { fetchLinks, storeLinks }
