import { copy, edit, del, done } from '@assets/index.ts'
import { useState } from 'react'

interface LinkCardProps {
    title: string
    url: string
}

const LinkCard = ({ title, url }: LinkCardProps) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyClick = () => {
        navigator.clipboard.writeText(url)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 5000)
    }

    return (
        <div className="bg-white mt-1 py-1 px-5 shadow flex justify-between items-center">
            <p className="text-slate-500 text-xs">{title}</p>

            <div className="flex">
                {isCopied ? (
                    <div className="w-8 h-8 p-2 rounded-full transition-all ease-in-out duration-300 flex justify-center items-center">
                        <img className="h-4" src={done} />
                    </div>
                ) : (
                    <div
                        className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-copy transition-all ease-in-out duration-300 flex justify-center items-center"
                        onClick={handleCopyClick}
                    >
                        <img className="h-4" src={copy} />
                    </div>
                )}

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
