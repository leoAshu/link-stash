import { Link } from '@src/models'

const fetchLinks = async (): Promise<Link[]> => {
    const storedLinks = await chrome.storage.sync.get('links')
    console.log(storedLinks, 'storedLinks')

    return storedLinks['links']
}

const storeLinks = async (links: Link[]) => {
    await chrome.storage.sync.set({ links })
}

export { fetchLinks, storeLinks }
