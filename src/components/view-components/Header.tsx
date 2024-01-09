import logo from '../../assets/header-logo.svg'
import add from '../../assets/add-icon.svg'

const Header = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="h-12 px-4 flex justify-between items-center">
                <img className="h-8" src={logo} />
                <div className="hover:bg-gray-100 active:bg-gray-200 p-2 rounded-full transition-colors ease-in-out duration-300">
                    <img className="h-5" src={add} />
                </div>
            </div>
        </div>
    )
}

export default Header
