import React, {memo} from "react";
import {CSSTransition} from "react-transition-group";
import useTypedSelector from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";
import {Step} from "../../store/reducers/stepReducer";
import Phone from "./steps/phone/Phone";
import SMS from "./steps/sms/SMS";
import Name from "./steps/name/Name";
import Success from "./steps/success/Success";
import Pay from "./steps/pay/Pay";
import "./Card.css";

const Card = () => {
    const step = useTypedSelector(state => state.step);
    const {goNext, goBack} = useActions();

    return <div className="card">
        <CSSTransition timeout={500} in={step.current === Step.PHONE} mountOnEnter unmountOnExit classNames={{
            enterActive: "fade-in",
            exitActive: "fade-out"
        }}>
            {/*<Phone/>*/}
            <Pay/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.SMS} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.SMS < step.previous ? "fade-in-left" : "fade-in",
            exitActive: Step.SMS < step.current ? "fade-out-left" : "fade-out"
        }}>
            <SMS/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.NAME} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.NAME < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.NAME < step.current ? "fade-out-left" : "fade-out-right"
        }}>
            <Name/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.PAY} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.PAY < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.PAY < step.current ? "fade-out-left" : "fade-out-right"
        }}>
            <Pay/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.SUCCESS} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.SUCCESS < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.SUCCESS < step.current ? "fade-out-left" : "fade-out-right"
        }}>
            <Success/>
        </CSSTransition>
    </div>;
}

export default memo(Card);
