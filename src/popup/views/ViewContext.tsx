import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'
import { View } from '.'

interface ViewContextProps {
    view: View
    setView: Dispatch<SetStateAction<View>>
}

const ViewContext = createContext<ViewContextProps | undefined>(undefined)

const ViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [view, setView] = useState<View>(View.Add)

    return <ViewContext.Provider value={{ view, setView }}>{children}</ViewContext.Provider>
}

const useView = () => {
    const context = useContext(ViewContext)
    if (!context) {
        throw new Error('useView must be used within a ViewProvider')
    }
    return context
}

export { ViewProvider, useView }
