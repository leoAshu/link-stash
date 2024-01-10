import { roundButton, menu } from '@assets/index.ts'

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
]

const Home = () => {
    return (
        <>
            {links.map((link) => (
                <LinkCard key={link.id} title={link.title} />
            ))}

            <div className="absolute bottom-4 right-4 h-10 rounded-full shadow-md shadow-[#00000040] cursor-pointer active:scale-[0.9] transition-all ease-in-out duration-300">
                <img src={roundButton} />
            </div>
        </>
    )
}

const LinkCard = ({ title }: { title: string }) => {
    return (
        <div className="bg-white mt-1 py-1 px-5 shadow flex justify-between items-center">
            <p className="text-slate-500 text-xs">{title}</p>
            <div className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center">
                <img className="h-4 w-4" src={menu} />
            </div>
        </div>
    )
}

export default Home
