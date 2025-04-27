import MiniDrawer from "../components/adminNav.jsx"
import AppRouter from "../components/adminRouter.jsx"

const pages = ["Users","Branch verification","Branches","Warehouses","API","Company","Billing"];

export default function Admin(){
    return (
        <>
            < MiniDrawer />

            <div className="container">
                < AppRouter adminPage={ 'About' } />
            </div>
        </>
        )


}