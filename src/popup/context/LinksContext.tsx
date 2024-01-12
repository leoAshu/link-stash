import { createContext } from 'react'
import { Link } from '.'

interface LinksContextProps {
    links: Link[]
    addLink: (title: string, url: string) => void
    updateLink: (updatedLink: Link) => void
    deleteLink: (linkId: string) => void
}

const LinksContext = createContext<LinksContextProps | undefined>(undefined)

export default LinksContext
