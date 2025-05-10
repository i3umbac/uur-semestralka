import React, { Suspense, lazy, useMemo } from 'react';


import { validPages } from "./mockData.jsx"

export default function AdminRouter({ adminPage }) {

    // useMemo to validate if the provided adminPage is valid, if not default to "branch"
    const validatedPage = useMemo(() => {
        if (!validPages.includes(adminPage)) {
            return "branch";
        }
        return adminPage;
    }, [adminPage]);

    // useMemo to lazy-import the component based on the validated page
    const Component = useMemo(() => {
        return lazy(() => import(`../content/${validatedPage}`));
    }, [validatedPage]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {/* render the lazy-loaded component */}
            <Component />
        </Suspense>
    );
}