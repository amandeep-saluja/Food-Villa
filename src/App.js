import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Error from './Error/Error';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Shimmer from './components/Shimmer/Shimmer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Instamart = lazy(() => import('./components/Instamart/Instamart'));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:restId',
                element: <RestaurantMenu />,
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<RouterProvider router={appRouter} />);
