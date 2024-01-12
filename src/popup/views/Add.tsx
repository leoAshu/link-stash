const Add = () => {
    return (
        <div className="h-60">
            <div className="flex flex-col items-center px-8">
                <div className="mt-6 w-full flex flex-col">
                    <p className="text-xs font-medium mb-1">Title</p>
                    <input
                        type="text"
                        className="p-1 outline-none border border-[#0000001A] focus:border-[#00000040] transition-all ease-in-out duration-300"
                    />
                </div>

                <div className="mt-4 w-full flex flex-col">
                    <p className="text-xs font-medium mb-1">Link</p>
                    <input
                        type="url"
                        className="p-1 outline-none border border-[#0000001A] focus:border-[#00000040] transition-all ease-in-out duration-300"
                    />
                </div>

                <div className="mt-6 w-full flex flex-col">
                    <div className="py-2 text-center text-xs leading-none text-white bg-gradient-to-r from-[#00C6FF] active:from-[#0072FF] active:to-[#0072FF] to-[#0072FF] transition-all ease-in-out duration-300 select-none cursor-pointer">
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
