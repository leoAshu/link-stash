import { FormEvent, useState } from 'react'
import { useLinks } from '../context/LinksProvider'

interface AddProps {
    id: string
    title: string
    url: string
}

const Add = (props: AddProps) => {
    const { addLink, updateLink } = useLinks()
    const [link, setLink] = useState({
        id: props.id,
        title: props.title,
        url: props.url,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        console.log('addView: handleChange')
        console.log(name, value)

        setLink((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (link.id) {
            updateLink(link)
        } else {
            addLink(link)
        }

        setLink({
            id: '',
            title: '',
            url: '',
        })
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
