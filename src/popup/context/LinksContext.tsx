import { createContext } from 'react'
import { Link } from '.'

interface LinksContextProps {
    links: Link[]
    addLink: (newLink: Link) => void
    updateLink: (updatedLink: Link) => void
    deleteLink: (linkId: string) => void
}

const LinksContext = createContext<LinksContextProps | undefined>(undefined)

export default LinksContext
