import AppRouter from "./components/appRouter.jsx"
import ResponsiveAppBar from "./components/nav.jsx"
import { pages, settings } from "./components/mockData.jsx"

// the "index" page
// displays the main navbar and calls main router

function App() {
    return (
        <>
            < ResponsiveAppBar pages = { pages } settings = { settings } />
            <div className="container">
                < AppRouter pages= { pages } />
            </div>
        </>
    )
}

export default App
