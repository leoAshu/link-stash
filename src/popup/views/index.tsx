import Add from './Add'
import Home from './Home'
import { ViewProvider, useView } from './ViewContext'

enum View {
    Home,
    Add,
}

export { View, Add, Home, ViewProvider, useView }
