import { Dispatch, SetStateAction, createContext } from 'react'
import { Link } from '@src/models'

interface LinksContextProps {
    links: Link[]
    activeId: string
    findById: (id: string) => Link
    addLink: (newLink: Link) => void
    updateLink: (updatedLink: Link) => void
    deleteLink: (linkId: string) => void
    setActiveId: Dispatch<SetStateAction<string>>
}

const LinksContext = createContext<LinksContextProps | undefined>(undefined)

export default LinksContext
