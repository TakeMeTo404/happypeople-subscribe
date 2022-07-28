import React, {memo} from "react";
import {Button} from "@mui/material";
import NextButton from "../../../buttons/next/NextButton";
import BackButton from "../../../buttons/back/BackButton";
import {useAppDispatch} from "../../../../hooks/redux";
import {stepSlice} from "../../../../store/reducers/stepSlice";
import "./SMS.css";

const SMS = () => {
    const dispatch = useAppDispatch();
    const {next, back} = stepSlice.actions;

    return <div className="card__content sms">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={() => dispatch(back())}/>
        </div>
        <h2 className="card__title sms__title">
            Код из СМС
        </h2>
        <div className="sms__controls">
            <div className="controls__line-1">
                <input className="line-1__code" placeholder="0000"/>
                <NextButton handleClick={() => dispatch(next())} color="primary"/>
            </div>
            <Button className="controls__resend">Не пришел?</Button>
        </div>
    </div>;
};

export default memo(SMS);
