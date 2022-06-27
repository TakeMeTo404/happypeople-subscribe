import React, {memo} from "react";
import {Button} from "@mui/material";
import NextButton from "../../../buttons/NextButton/NextButton";
import BackButton from "../../../buttons/BackButton";
import useActions from "../../../../hooks/useActions";
import "./SMS.css";

const SMS = () => {
    const {goNext, goBack} = useActions();

    return <div className="card__content sms">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={goBack}/>
        </div>
        <h2 className="sms__title">
            Код из СМС
        </h2>
        <div className="sms__controls">
            <div className="controls__line-1">
                <input className="line-1__code" placeholder="0000"/>
                <NextButton handleClick={goNext} color="primary"/>
            </div>
            <Button className="controls__resend">Не пришел?</Button>
        </div>
    </div>;
};

export default memo(SMS);
