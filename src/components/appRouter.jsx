import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// main router component for the whole page
// creates routes based on a passed prop "pages"
// args:
//      pages - array of valid pages

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