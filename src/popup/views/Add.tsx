import { FormEvent, useEffect, useState } from 'react'
import { useLinks } from '../context'
import { View, useView } from '.'

const Add = () => {
    const { setView } = useView()
    const { addLink, findById, updateLink, activeId } = useLinks()
    const [link, setLink] = useState({
        id: activeId,
        title: '',
        url: '',
    })

    useEffect(() => {
        if (activeId) {
            setLink(findById(activeId))
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setLink((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (link.id) {
            updateLink(link)
        } else {
            addLink(link)
        }

        setView(View.Home)
    }

    return (
        <div className="h-60">
            <form onSubmit={handleSubmit} className="flex flex-col items-center px-8">
                <div className="mt-6 w-full flex flex-col">
                    <p className="text-xs font-medium mb-1">Title</p>
                    <input
                        required
                        type="text"
                        name="title"
                        value={link.title}
                        onChange={handleChange}
                        className="p-1 outline-none border border-[#0000001A] focus:border-[#00000040] transition-all ease-in-out duration-300"
                    />
                </div>

                <div className="mt-4 w-full flex flex-col">
                    <p className="text-xs font-medium mb-1">Link</p>
                    <input
                        required
                        type="url"
                        name="url"
                        value={link.url}
                        onChange={handleChange}
                        className="p-1 outline-none border border-[#0000001A] focus:border-[#00000040] transition-all ease-in-out duration-300"
                    />
                </div>

                <div className="mt-6 w-full flex flex-col">
                    <button
                        type="submit"
                        className="py-2 text-center text-xs leading-none text-white bg-gradient-to-r from-[#00C6FF] active:from-[#0072FF] active:to-[#0072FF] to-[#0072FF] transition-all ease-in-out duration-300 select-none cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Add
