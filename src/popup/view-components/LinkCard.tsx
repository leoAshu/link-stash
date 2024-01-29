import { useState } from 'react'
import { View, useView } from '../views'
import { useLinks } from '../context'
import { cleanUrl } from '@src/models'
import { copy, edit, del, done, openLink } from '@assets/index.ts'

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
            <p className="text-xs font-semibold overflow-hidden overflow-ellipsis">{title}</p>

            <div className="flex">
                {isCopied ? (
                    <div
                        title="done"
                        className="w-8 h-8 p-2 rounded-full transition-all ease-in-out duration-300 flex justify-center items-center"
                    >
                        <img className="h-4" src={done} />
                    </div>
                ) : (
                    <div
                        title="copy"
                        className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-copy transition-all ease-in-out duration-300 flex justify-center items-center"
                        onClick={handleCopyClick}
                    >
                        <img className="h-4" src={copy} />
                    </div>
                )}

                <div
                    title="open"
                    className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center"
                    onClick={() => {
                        window.open(url, '_blank')
                    }}
                >
                    <img className="h-4" src={openLink} />
                </div>

                <div
                    title="edit"
                    className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center"
                    onClick={() => {
                        setActiveId(id)
                        setView(View.Add)
                    }}
                >
                    <img className="h-4" src={edit} />
                </div>

                <div
                    title="delete"
                    className="w-8 h-8 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer transition-all ease-in-out duration-300 flex justify-center items-center"
                    onClick={() => deleteLink(id)}
                >
                    <img className="h-4" src={del} />
                </div>
            </div>
        </div>
    )
}

export default LinkCard
