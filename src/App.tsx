import React from 'react';
import './App.css';
import {Stack, TextField, ThemeProvider, Typography, withStyles} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {theme} from "./theme";
import Header from "./components/Header";
import StepCard from "./components/StepCard";
import BackButton from "./components/buttons/BackButton";
import CardHeader from "./components/CardHeader";
import SmsCard from "./components/cards/SmsCard";
import NameCard from "./components/cards/NameCard";
import CloudPaymentsCard from "./components/cards/CloudPaymentsCard";
import SuccessCard from "./components/cards/SuccessCard";
import TelephoneCard from "./components/cards/TelephoneCard";


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme/>
                <Stack alignItems="stretch">
                    <Header color="primary"/>
                    <Stack marginBottom="20px" alignItems="center">
                        <TelephoneCard/>
                    </Stack>
                    <Stack marginBottom="20px" alignItems="center">
                        <SuccessCard/>
                    </Stack>
                    <Stack marginTop="20px" alignItems="center">
                        <SmsCard/>
                    </Stack>
                    <Stack marginTop="20px" alignItems="center">
                        <NameCard/>
                    </Stack>
                    <Stack marginTop="20px" alignItems="center">
                        <CloudPaymentsCard/>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </div>
    );
}

export default App;
