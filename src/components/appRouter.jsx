import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

export default function AppRouter({ pages }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {/* define the Routes component to handle page routing */}
            <Routes>
                {pages.map((page) => {
                    // dynamically import the page component based on the page name
                    const Component = lazy(() => import(`../content/${page.toLowerCase()}`));
                    return (
                        <Route
                            key={page}
                            path={`/${page.toLowerCase()}`} // define the route path
                            element={<Component />} // render the dynamically imported component
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
}
