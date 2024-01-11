import { copy, edit, del } from '@assets/index.ts'

const LinkCard = ({ title }: { title: string }) => {
    return (
        <div className="bg-white mt-1 py-1 px-5 shadow flex justify-between items-center">
            <p className="text-slate-500 text-xs">{title}</p>
            <div className="flex">
                <div className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center">
                    <img className="h-4" src={copy} />
                </div>
                <div className="w-8 h-8 p-2 ml-1 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center">
                    <img className="h-4" src={edit} />
                </div>
                <div className="w-8 h-8 p-2 ml-1 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center">
                    <img className="h-4" src={del} />
                </div>
            </div>
        </div>
    )
}

export default LinkCard
