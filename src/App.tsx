import React, {useEffect, useState} from 'react';
import './App.css';
import {Stack, TextField, ThemeProvider, Typography, useMediaQuery, withStyles} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {theme} from "./theme";
import TelephoneCard from "./components/cards/TelephoneCard";
import Content from "./components/Content";
import circleUp from "./assets/img/circleUp.png";
import circleBottom from "./assets/img/circleBottom.png";
import {CSSTransition} from "react-transition-group";

function App() {
    const [state, setState] = useState<0 | 1>(0);
    const isLarge = useMediaQuery(theme.breakpoints.up('laptop')) || true;

    useEffect(() => {
        setTimeout(() => setState(1), 3000);
        setTimeout(() => setState(0), 6000);

    }, [])

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme/>
                {isLarge &&
                    <div style={{position: "relative", height: "3197px"}}>
                        <CSSTransition mountOnEnter in={state === 0} timeout={500}
                                       classNames={{
                                           enterActive: 'content-entering',
                                           exitActive: 'content-exiting',
                                           exitDone: 'content-hidden'
                                       }}
                        >
                            <div>
                                <Content/>
                                <div style={{position: "absolute", zIndex: -1, top: -1000, left: -564, width: "1834px", height: "4267px"}}>
                                    <img onClick={() => {console.log('clicked circle'); setState(1)}} src={circleUp} width={1614} height={1614} style={{position: "absolute", right: 0, top: 0}}/>
                                    <img src={circleBottom} width={1614} height={1614} style={{position: "absolute", left: 0, bottom: 0}}/>
                                </div>
                            </div>
                        </CSSTransition>
                        <div className="card-holder">
                            <CSSTransition in={state === 0} timeout={500} unmountOnExit mountOnEnter classNames={{
                                enterActive: 'cardContent-entering-left',
                                exitActive: 'cardContent-exiting-left'
                            }}>
                                <TelephoneCard/>
                            </CSSTransition>
                            <CSSTransition in={state === 1} timeout={500} unmountOnExit mountOnEnter classNames={{
                                enterActive: 'cardContent-entering-right',
                                exitActive: 'cardContent-exiting-right'
                            }}>
                                <TelephoneCard/>
                            </CSSTransition>
                        </div>
                    </div>
                }
            </ThemeProvider>
        </div>
    );
}

export default App;
