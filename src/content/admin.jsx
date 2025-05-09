import MiniDrawer from "../components/adminNav.jsx"
import AdminRouter from "../components/adminRouter.jsx"
import React, { useState } from 'react'

import { adminPages } from "../components/mockData.jsx"

const pages = adminPages;
export default function Admin(){
    const [adminPage, setAdminPage] = useState('branch'); // Výchozí stránka

    return (
        <>
            < MiniDrawer setAdminPage={setAdminPage} items={pages} />

            <div className="container">
                < AdminRouter adminPage={ adminPage } />
            </div>
        </>
        )


}