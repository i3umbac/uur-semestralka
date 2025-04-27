import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Komponenta sloužící pro routing celé stránky
// Podle předaného pole stránek vytvoří router, který automaticky importuje stránky ze složky "conents" (stejnojmenné)
// args:
//      pages - pole stránek

function AppRouter( { pages }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {pages.map((page) => {
                    const Component = lazy(() => import(`../content/${page.toLowerCase()}`) ); // Dynamické importování komponent
                    return (
                        <Route
                            key={page}
                            path={`/${page.toLowerCase()}`}
                            element={<Component />}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;