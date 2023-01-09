import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/Context';
render(
    <Context>
        <App />
    </Context>
    , document.getElementById('root'));

