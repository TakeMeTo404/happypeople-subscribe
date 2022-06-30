import React from 'react';
import {useMediaQuery} from 'react-responsive'
import Content from "./components/content/Content";
import {CSSTransition} from "react-transition-group";
import Card from "./components/card/Card";
import useTypedSelector from "./hooks/useTypedSelector";
import {Step} from "./store/reducers/stepReducer";
import Header from "./components/Header/Header";
import './App.css';

function App() {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: calc(2 * 1rem * 619/16))'})
    const step = useTypedSelector(state => state.step.current);

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
            </div>

            {!isTabletOrMobile &&
                <div className="App__card-zone">
                    <CSSTransition in={step === Step.PHONE} appear timeout={500}
                                   classNames={{
                                       appearDone: 'card-holder_right',
                                       enterActive: 'card-holder-moving-right',
                                       enterDone: 'card-holder_right',
                                       exitActive: 'card-holder-moving-center',
                                       exitDone: 'card-holder_center'
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
