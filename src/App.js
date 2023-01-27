import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<AppLayout />);
