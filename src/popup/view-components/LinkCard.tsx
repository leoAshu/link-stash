import { menu } from '@assets/index.ts'

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

export default LinkCard
