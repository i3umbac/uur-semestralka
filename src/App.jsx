import AppRouter from "./components/appRouter.jsx"
import ResponsiveAppBar from "./components/nav.jsx"

// params to display inside the navbar
const pages = ['Home', 'Send', 'Company', 'Admin'];
const settings = ['Credits', 'Records', 'Account', 'Logout'];

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
