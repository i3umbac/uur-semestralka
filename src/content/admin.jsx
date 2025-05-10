import MiniDrawer from "../components/adminNav.jsx"
import AdminRouter from "../components/adminRouter.jsx"
import React, { useState } from 'react'

import { adminPages } from "../components/mockData.jsx"

const pages = adminPages;  // initialize pages from adminPages

export default function Admin() {
    // state to track the current admin page, default is 'branch'
    const [adminPage, setAdminPage] = useState('branch');

    return (
        <>
            {/* render the MiniDrawer component with setAdminPage function and pages as props */}
            <MiniDrawer setAdminPage={setAdminPage} items={pages} />

            <div className="container">
                {/* render the AdminRouter component passing the current admin page as a prop */}
                <AdminRouter adminPage={adminPage} />
            </div>
        </>
    );
}