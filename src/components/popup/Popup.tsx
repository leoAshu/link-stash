import ReactDOM from 'react-dom/client'
import { useState } from 'react'

import { View, renderView } from './views'
import './index.css'

function Popup() {
    const [view, setView] = useState(View.Home)

    return (
        <main className="w-60 h-72 bg-[#F5F7F9]">
            <button onClick={() => setView(View.Home)}>Home</button>
            <br />
            <button onClick={() => setView(View.Add)}>Add</button>
            {renderView(view)}
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Popup />)
