import Add from './Add'
import Home from './Home'

enum View {
    Home,
    Add,
}

const renderView = (view: View) => {
    switch (view) {
        case View.Home:
            return <Home />
        case View.Add:
            return <Add />
    }
}

export { View, Add, Home, renderView }
