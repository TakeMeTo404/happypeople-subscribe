import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import theme from "./theme";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <App/>
        </ThemeProvider>
    </Provider>
);
