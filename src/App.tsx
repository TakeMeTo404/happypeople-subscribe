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
                <CSSTransition in={step === Step.PHONE} timeout={500}
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
                    <CSSTransition in={step === Step.PHONE} appear timeout={{appear: 0, enter: 500, exit: 500}}
                                   classNames={{
                                       appearDone: 'card-right',
                                       enterActive: 'card-move-right',
                                       enterDone: 'card-right',
                                       exitActive: 'card-move-center',
                                       exitDone: 'card-center'
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
