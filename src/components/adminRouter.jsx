import React, { Suspense, lazy } from 'react';

// Dynamické importování komponent

function AppRouter({ adminPage }) {
    const Component = lazy(() => import(`../content/${adminPage.toLowerCase()}`) ); // Dynamické importování komponent

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    );
}

export default AppRouter;