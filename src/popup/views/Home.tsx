import { LinkCard } from '../view-components'

const links = [
    {
        id: 1,
        title: 'LinkedIn',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 2,
        title: 'GitHub',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 3,
        title: 'Leetcode',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 4,
        title: 'Portfolio',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 5,
        title: 'Leetcode',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 6,
        title: 'Portfolio',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 7,
        title: 'Leetcode',
        link: 'www.linkedin.com/leoAshu',
    },
    {
        id: 8,
        title: 'Portfolio',
        link: 'www.linkedin.com/leoAshu',
    },
]

const Home = () => {
    return (
        <div className="h-60 overflow-auto scrollbar">
            {links.map((link) => (
                <LinkCard key={link.id} title={link.title} />
            ))}
        </div>
    )
}

export default Home
