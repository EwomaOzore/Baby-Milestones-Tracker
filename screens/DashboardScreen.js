import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dashboard from '../components/Dashboard';

const DashboardScreen = () => {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}

export default DashboardScreen;