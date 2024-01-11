import { LinkCard } from '../view-components'

const links = [
    {
        id: 1,
        title: 'LinkedIn',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 2,
        title: 'GitHub',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 3,
        title: 'Leetcode',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 4,
        title: 'Portfolio',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 5,
        title: 'Leetcode',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 6,
        title: 'Portfolio',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 7,
        title: 'Leetcode',
        url: 'www.linkedin.com/leoAshu',
    },
    {
        id: 8,
        title: 'Portfolio',
        url: 'www.linkedin.com/leoAshu',
    },
]

const Home = () => {
    return (
        <div className="h-60 overflow-auto scrollbar">
            {links.map((link) => (
                <LinkCard key={link.id} title={link.title} url={link.url} />
            ))}
        </div>
    )
}

export default Home
