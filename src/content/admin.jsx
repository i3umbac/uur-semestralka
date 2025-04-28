import MiniDrawer from "../components/adminNav.jsx"
import AppRouter from "../components/adminRouter.jsx"

export default function Admin(){
    return (
        <>
            < MiniDrawer />

            <div className="container">
                < AppRouter adminPage={ 'franchise' } />
            </div>
        </>
        )


}