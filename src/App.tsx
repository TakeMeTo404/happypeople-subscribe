import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive'
import Content from "./components/content/Content";
import circleUp from "./assets/img/circleUp.png";
import circleBottom from "./assets/img/circleBottom.png";
import {CSSTransition} from "react-transition-group";
import Card from "./components/card/Card";
import useTypedSelector from "./hooks/useTypedSelector";
import {Step} from "./store/reducers/stepReducer";
import useActions from "./hooks/useActions";
import Header from "./components/Header/Header";
import './App.css';

function App() {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    const step = useTypedSelector(state => state.step.current);
    const {goNext, goBack} = useActions();

    return (
        <div className="App">
            {
                isTabletOrMobile &&
                    <div className="App__card-holder_mobile">
                        <Card/>
                    </div>
            }

            <div className="App__content">
                <div className="App__header">
                    <Header/>
                </div>
                <CSSTransition mountOnEnter in={step === Step.PHONE} timeout={500}
                               classNames={{
                                   enterActive: 'fade-in',
                                   exitActive: 'fade-out',
                                   exitDone: 'hidden'
                               }}
                >
                    <Content/>
                </CSSTransition>
                <CSSTransition mountOnEnter in={step === Step.PHONE} timeout={500}
                               classNames={{
                                   enterActive: 'fade-in',
                                   exitActive: 'fade-out',
                                   exitDone: 'hidden'
                               }}
                >
                    <div className="App__circles">
                        <img src={circleUp} className="circle" style={{right: 0, top: 0}}/>
                        <img src={circleBottom} className="circle" style={{left: 0, bottom: 0}}/>
                    </div>
                </CSSTransition>
            </div>

            {!isTabletOrMobile && <CSSTransition in={step === Step.PHONE} appear timeout={500}
                                                          classNames={{
                                                              appearDone: 'card-holder-right',
                                                              enterActive: 'card-holder-moving-right',
                                                              enterDone: 'card-holder-right',
                                                              exitActive: 'card-holder-moving-center',
                                                              exitDone: 'card-holder-center'
                                                          }}>
                <div className="App__card-holder_desktop">
                    <Card/>
                </div>
            </CSSTransition>}

            {/*{*/}
            {/*    isMobile && <div className="card-mobile-wrapper">*/}
            {/*        <Card/>*/}
            {/*    </div>*/}
            {/*}*/}


            {/*            <CSSTransition timeout={500} in={step === Step.PHONE} appear classNames={{
                appearDone: "secondary",
                enterActive: "color-to-secondary",
                enterDone: "secondary",
                exitActive: "color-to-primary",
                exitDone: "primary"
            }}>
                <div className="header">
                    <Smile
                        height="1.5rem"
                        width={"1.25rem"}
                        fill="inherit"
                        stroke="inherit"
                    />
                    <Typography variant="h2" lineHeight="100%" sx={{color: "inherit", fontSize: "inherit", pb: ".5%"}}>частливые</Typography>
                </div>
            </CSSTransition>*/}
            {/*<Header/>*/}

            {/*<CSSTransition mountOnEnter in={step === Step.PHONE} timeout={500}*/}
            {/*               classNames={{*/}
            {/*                   enterActive: 'fade-in',*/}
            {/*                   exitActive: 'fade-out',*/}
            {/*                   exitDone: 'hidden'*/}
            {/*               }}*/}
            {/*>*/}
            {/*    <div className="content-wrapper">*/}
            {/*        <Content/>*/}
            {/*        <div className="circles-wrapper">*/}
            {/*            /!*<img src={circleUp} className="circle" style={{right: 0, top: 0}}/>*!/*/}
            {/*            /!*<img src={circleBottom} className="circle" style={{left: 0, bottom: 0}}/>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</CSSTransition>*/}

            {/*{*/}
            {/*    !isMobile && <CSSTransition in={step === Step.PHONE} appear timeout={500}*/}
            {/*                                classNames={{*/}
            {/*                                    appearDone: 'card-holder-right',*/}
            {/*                                    enterActive: 'card-holder-moving-right',*/}
            {/*                                    enterDone: 'card-holder-right',*/}
            {/*                                    exitActive: 'card-holder-moving-center',*/}
            {/*                                    exitDone: 'card-holder-center'*/}
            {/*                                }}>*/}
            {/*        <div className="card-holder">*/}
            {/*            <Card/>*/}
            {/*        </div>*/}
            {/*    </CSSTransition>*/}
            {/*}*/}
        </div>
    );
}

export default App;
