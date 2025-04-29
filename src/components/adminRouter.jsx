import React, { Suspense, lazy, useMemo } from 'react';

// Dynamické importování komponent


const validPages = [
    "users",
    "verification",
    "branch",
    "warehouse",
    "api",
    "company",
    "billing",
];

function AdminRouter({ adminPage }) {

    // Validace adminPage
    const validatedPage = useMemo(() => {
        if (!validPages.includes(adminPage)) {
            return "branch";  // Nastavení na "branches", pokud není validní
        }
        return adminPage;
    }, [adminPage]);

    const Component = useMemo(() => {
        return lazy(() => import(`../content/${validatedPage}`));
    }, [validatedPage]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    );
}


export default AdminRouter;