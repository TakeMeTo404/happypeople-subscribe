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


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme/>
                <Stack alignItems="stretch">
                    <Header color="primary"/>
                    <Stack alignItems="center">
                        <StepCard>
                            <Stack direction="row"
                                   padding="26px 26px 0 26px"
                                   justifyContent="flex-start"
                            >
                                <BackButton onClick={() => console.log("clicked")}/>
                            </Stack>
                        </StepCard>
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
