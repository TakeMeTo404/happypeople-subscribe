import React, {memo} from "react";
import {Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import CloudPaymentsForm from "../../../CloudPaymentsForm";
import NextButton from "../../../buttons/NextButton/NextButton";
import useActions from "../../../../hooks/useActions";
import BackButton from "../../../buttons/BackButton";
import "./Pay.css";

const Pay = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    const {goNext, goBack} = useActions();

    return <div className="card__content name">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={goBack}/>
        </div>
        <h2 className="card__title pay__title">
            Вступайте в сообщество счастливых и расскажите о себе!
        </h2>
        <div className="pay__content">
            <CloudPaymentsForm/>
            <div className="pay__bottom">
                <h3 className="pay__nominal">
                    199
                </h3>
                <h4 className="pay__interval">
                    ₽<br/>в месяц
                </h4>
                <div className="pay__next-button-wrapper">
                    <NextButton color="primary" handleClick={goNext}>
                        <span className="pay__next-button-title">
                            Оформить
                        </span>
                    </NextButton>
                </div>
            </div>
        </div>
    </div>;
};

export default memo(Pay);
