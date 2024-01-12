import { ReactNode, useContext, useEffect, useState } from 'react'
import { Link } from '.'
import LinksContext from './LinksContext'

const LinksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [links, setLinks] = useState<Link[]>([])

    useEffect(() => {
        setLinks([
            {
                id: '1',
                title: 'LinkedIn',
                url: 'www.linkedin.com/leoAshu',
            },
        ])
    }, [])

    const addLink = (newLink: Link) => {
        newLink.id = Date.now().toString()
        setLinks([...links, newLink])
    }

    const updateLink = (updatedLink: Link) => {
        setLinks((prevLinks) => prevLinks.map((link) => (link.id === updatedLink.id ? updatedLink : link)))
    }

    const deleteLink = (linkId: string) => {
        setLinks((prevLinks) => prevLinks.filter((link) => link.id !== linkId))
    }

    return <LinksContext.Provider value={{ links, addLink, updateLink, deleteLink }}>{children}</LinksContext.Provider>
}

const useLinks = () => {
    const context = useContext(LinksContext)
    if (!context) {
        throw new Error('useLinkContext must be used within a LinkProvider')
    }
    return context
}

export default LinksProvider
export { useLinks }
