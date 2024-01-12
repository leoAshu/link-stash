const Add = () => {
    return (
        <div className="h-60">
            <div className="flex flex-col items-center px-8">
                <div className="mt-6 w-full flex flex-col">
                    <p className="text-xs font-medium mb-1">Title</p>
                    <input type="text" className="p-1 outline-none border border-[#0000001A]" />
                </div>

                <div className="mt-4 w-full flex flex-col">
                    <p className="text-xs font-medium mb-1">Link</p>
                    <input type="url" className="p-1 outline-none border border-[#0000001A]" />
                </div>

                <div className="mt-6 w-full flex flex-col">
                    <div className="py-1 text-center text-xs text-white bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                        SAVE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
