import React, {useEffect, useState} from 'react';
import './App.css';
import {useMediaQuery, useTheme} from "@mui/material";
import Content from "./components/Content";
import circleUp from "./assets/img/circleUp.png";
import circleBottom from "./assets/img/circleBottom.png";
import {CSSTransition} from "react-transition-group";
import Card from "./components/card/Card";
import useTypedSelector from "./hooks/useTypedSelector";
import {Step} from "./store/reducers/stepReducer";
import useActions from "./hooks/useActions";

function App() {
    const theme = useTheme();
    const [state, setState] = useState<0 | 1>(0);
    const isLarge = useMediaQuery(theme.breakpoints.up('laptop')) || true;
    const step = useTypedSelector(state => state.step.current);
    const {goNext, goBack} = useActions();

    return (
        <div className="App">
            {isLarge &&
                <div style={{position: "relative", height: "3197px"}}>
                    <CSSTransition mountOnEnter in={step === Step.PHONE} timeout={500}
                                   classNames={{
                                       enterActive: 'fade-in',
                                       exitActive: 'fade-out',
                                       exitDone: 'hidden'
                                   }}
                    >
                        <div>
                            <Content/>
                            <div style={{position: "absolute", zIndex: -1, top: -1000, left: -564, width: "1834px", height: "4267px"}}>
                                <img src={circleUp} width={1614} height={1614} style={{position: "absolute", right: 0, top: 0}}/>
                                <img src={circleBottom} width={1614} height={1614} style={{position: "absolute", left: 0, bottom: 0}}/>
                            </div>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={step === Step.PHONE}
                                   appear
                                   timeout={500}
                                   classNames={{
                        appearDone: 'card-holder-right',
                        enterActive: 'card-holder-moving-right',
                        enterDone: 'card-holder-right',
                        exitActive: 'card-holder-moving-center',
                        exitDone: 'card-holder-center'
                    }}>
                        <div className="card-holder">
                            <Card/>
                        </div>
                    </CSSTransition>
                </div>
            }
        </div>
    );
}

export default App;
