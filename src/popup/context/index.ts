import LinksContext from './LinksContext'
import LinksProvider from './LinksProvider'
import { useLinks } from './LinksProvider'

interface Link {
    id: string
    title: string
    url: string
}

export { Link, LinksContext, LinksProvider, useLinks }
