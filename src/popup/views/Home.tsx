import { useLinks } from '../context/LinksProvider'
import { LinkCard } from '../view-components'

const Home = () => {
    const { links } = useLinks()
    return (
        <div className="h-60 overflow-auto scrollbar">
            {links.map((link) => (
                <LinkCard key={link.id} id={link.id} title={link.title} url={link.url} />
            ))}
        </div>
    )
}

export default Home
