import { ReactNode, useContext, useEffect, useState } from 'react'
import { LinksContext } from '.'
import { Link } from '@src/models'
import { Action, fetchLinks, sendMessage, storeLinks } from '@src/utils'

const LinksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeId, setActiveId] = useState<string>('')
    const [links, setLinks] = useState<Link[]>([])

    useEffect(() => {
        const init = async () => {
            setLinks((await fetchLinks()) ?? [])
        }
        init()
    }, [])

    const findById = (id: string) => {
        const link = links.filter((link) => link.id === id)[0]
        return link
    }

    const addLink = (newLink: Link) => {
        newLink.id = Date.now().toString()
        sendMessage({
            action: Action.Add,
            body: {
                link: newLink,
            },
        })
        setLinks([...links, newLink])
    }

    const updateLink = (updatedLink: Link) => {
        setLinks((prevLinks) => prevLinks.map((link) => (link.id === updatedLink.id ? updatedLink : link)))
    }

    const deleteLink = (linkId: string) => {
        sendMessage({
            action: Action.Delete,
            body: { link: findById(linkId) },
        })
        setLinks((prevLinks) => prevLinks.filter((link) => link.id !== linkId))
    }

    useEffect(() => {
        storeLinks(links)
    }, [addLink, updateLink, deleteLink])

    return (
        <LinksContext.Provider value={{ links, findById, addLink, updateLink, deleteLink, activeId, setActiveId }}>
            {children}
        </LinksContext.Provider>
    )
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
