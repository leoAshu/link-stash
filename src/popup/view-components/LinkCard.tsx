import { useState } from 'react'
import { View, useView } from '../views'
import { useLinks } from '../context'
import { copy, edit, del, done } from '@assets/index.ts'
import { cleanUrl } from '@src/utils'

interface LinkCardProps {
    id: string
    title: string
    url: string
}

const LinkCard = ({ id, title, url }: LinkCardProps) => {
    const { setView } = useView()
    const { deleteLink, setActiveId } = useLinks()
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyClick = () => {
        navigator.clipboard.writeText(cleanUrl(url))
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 5000)
    }

    return (
        <div className="bg-white mt-1 py-1 px-5 shadow flex justify-between items-center">
            <p className="text-xs font-semibold">{title}</p>

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

                <div
                    className="w-8 h-8 p-2 ml-1 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center"
                    onClick={() => {
                        setActiveId(id)
                        setView(View.Add)
                    }}
                >
                    <img className="h-4" src={edit} />
                </div>

                <div
                    className="w-8 h-8 p-2 ml-1 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center"
                    onClick={() => deleteLink(id)}
                >
                    <img className="h-4" src={del} />
                </div>
            </div>
        </div>
    )
}

export default LinkCard
