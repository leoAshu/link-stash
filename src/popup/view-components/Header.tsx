import { add } from '@assets/index'
import { View, useView } from '../views'
import { useLinks } from '../context'

const Header = () => {
    const { view, setView } = useView()
    const { setActiveId } = useLinks()

    return (
        <div className="bg-white shadow-md">
            <div className="h-12 px-4 flex justify-between items-center">
                <p className="ml-1 text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                    LinkStash
                </p>

                <div
                    className={`hover:bg-gray-100 active:bg-gray-200 p-2 rounded-full cursor-pointer ${
                        view == View.Home ? '' : '-rotate-45'
                    } transition-all ease-in-out duration-300`}
                    onClick={() => {
                        setActiveId('')
                        setView(view == View.Home ? View.Add : View.Home)
                    }}
                >
                    <img className="h-3.5 w-4" src={add} />
                </div>
            </div>
        </div>
    )
}

export default Header
