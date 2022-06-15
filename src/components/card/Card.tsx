import React, {memo} from "react";
import {CSSTransition} from "react-transition-group";
import useTypedSelector from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";
import {Step} from "../../store/reducers/stepReducer";
import TelephoneContent from "./content/TelephoneContent";
import SmsContent from "./content/SmsContent";
import NameContent from "./content/NameContent";
import SuccessContent from "./content/SuccessContent";
import PayContent from "./content/PayContent";

const enteringAnimationClass = (left: boolean) => {
    return left ? "cardContent-entering-left" : "cardContent-entering-right"
}
const exitingAnimationClass = (left: boolean) => {
    return left ? "cardContent-exiting-left" : "cardContent-exiting-right"
}

const Card = () => {
    const step = useTypedSelector(state => state.step);
    const {goNext, goBack} = useActions();

    return <div className="card">
        <CSSTransition timeout={500} in={step.current === Step.PHONE} mountOnEnter unmountOnExit classNames={{
            enterActive: "fade-in",
            exitActive: "fade-out"
        }}>
            <TelephoneContent/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.SMS} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.SMS < step.previous ? "fade-in-left" : "fade-in",
            exitActive: Step.SMS < step.current ? "fade-out-left" : "fade-out"
        }}>
            <SmsContent/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.NAME} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.NAME < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.NAME < step.current ? "fade-out-left" : "fade-out-right"
        }}>
            <NameContent/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.PAY} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.PAY < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.PAY < step.current ? "fade-out-left" : "fade-out-right"
        }}>
            <PayContent/>
        </CSSTransition>
        <CSSTransition timeout={500} in={step.current === Step.SUCCESS} mountOnEnter unmountOnExit classNames={{
            enterActive: Step.SUCCESS < step.previous ? "fade-in-left" : "fade-in-right",
            exitActive: Step.SUCCESS < step.current ? "fade-out-left" : "fade-out-right"
        }}>
            <SuccessContent/>
        </CSSTransition>
    </div>;
}

export default memo(Card);
