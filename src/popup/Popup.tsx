import ReactDOM from 'react-dom/client'
import { Header } from './view-components'
import { Add, Home, View, ViewProvider, useView } from './views'
import { LinksProvider } from './context'
import './index.css'

function Popup() {
    const { view } = useView()

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
        <main className="w-64 h-80 bg-[#F5F7F9] font-inter text-slate-600">
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
