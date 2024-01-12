import ReactDOM from 'react-dom/client'
import { Add, Home, View, ViewProvider, useView } from './views'
import { Header } from './view-components'
import './index.css'
import LinksProvider from './context/LinksProvider'

function Popup() {
    const { view } = useView()

    const renderView = () => {
        switch (view) {
            case View.Home:
                return <Home />
            case View.Add:
                return <Add id="" title="" url="" />
            default:
                return null
        }
    }

    return (
        <main className="w-60 h-72 bg-[#F5F7F9] font-inter text-slate-600">
            <Header />
            {renderView()}
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ViewProvider>
        <LinksProvider>
            <Popup />
        </LinksProvider>
    </ViewProvider>
)
