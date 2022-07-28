import React, {memo} from "react";
import {CSSTransition} from "react-transition-group";
import {useAppSelector} from "../../hooks/redux";
import {Step} from "../../store/reducers/stepSlice";
import Phone from "./steps/phone/Phone";
import SMS from "./steps/sms/SMS";
import Name from "./steps/name/Name";
import Success from "./steps/success/Success";
import Pay from "./steps/pay/Pay";
import "./Card.css";

const Card = () => {
    const step = useAppSelector(state => state.step);

    return <div className="card">
        <CSSTransition timeout={500} in={step.current === Step.PHONE} mountOnEnter unmountOnExit classNames={{
            enterActive: "fade-in-left",
            exitActive: "fade-out-left"
        }}>
            <Phone/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.SMS} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.SMS < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.SMS < step.current ? "fade-out-left" : "fade-out-right"
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
            enterActive: "fade-in-right",
            exitActive: "fade-out-right"
        }}>
            <Success/>
        </CSSTransition>
    </div>;
}

export default memo(Card);
