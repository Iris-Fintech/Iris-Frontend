import React, { lazy } from 'react';

const Main = lazy(() => import('./components/Main'));
const WalletModal = lazy(() => import('./components/WalletModal'));
const Routes = lazy(() => import('./route'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));

import BaseConnector from './utils/baseConnection';

const App = () => {
    BaseConnector();

    return (
        <div>
            <Header />
            <Routes />
            <Main />
            <WalletModal />
            <Footer />
        </div>
    );
};

export default App;
