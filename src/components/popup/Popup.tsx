import ReactDOM from 'react-dom/client'

import logo from '../../assets/header-logo.svg'
import add from '../../assets/add-icon.svg'
import './index.css'
import { useState } from 'react'
import { Add, Home, View } from './views'

function Popup() {
    const [view, setView] = useState(View.Home)

    const renderView = () => {
        switch (view) {
            case View.Home:
                return <Home />
            case View.Add:
                return <Add />
            default:
                return null
        }
    }

    return (
        <main className="w-60 h-72 bg-[#F5F7F9]">
            <div className="bg-white shadow-md">
                <div className="h-12 px-4 flex justify-between items-center">
                    <img className="h-8" src={logo} />
                    <div
                        className="hover:bg-gray-100 active:bg-gray-200 p-2 rounded-full transition-colors ease-in-out duration-300"
                        onClick={() => setView(view == View.Home ? View.Add : View.Home)}
                    >
                        <img className={view == View.Home ? '' : 'rotate-45'} src={add} />
                    </div>
                </div>
            </div>

            {renderView()}
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Popup />)
