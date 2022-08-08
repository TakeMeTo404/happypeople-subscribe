import React, {memo, useCallback} from "react";
import CloudPaymentsForm from "../../../CloudPaymentsForm";
import NextButton from "../../../buttons/next/NextButton";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import BackButton from "../../../buttons/back/BackButton";
import {stepSlice} from "../../../../store/reducers/stepSlice";
import showWidget from "./showWidget";

import "./Pay.css";

const Pay = () => {
    const dispatch = useAppDispatch();
    const {next, back} = stepSlice.actions;

    const id = useAppSelector(state => state.auth.user?.id)

    const onClickPay = useCallback(() => {
        if (!id) return console.error('id is undefined')

        const onSuccess = () => {
            console.log('Success')
            dispatch(next())
        }
        const onFail = () => {
            console.log('fail')
        }
        showWidget(`${id}`, onSuccess, onFail);
    }, [id])

    return <div className="card__content name">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={() => dispatch(back())}/>
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
                    <NextButton color="primary" handleClick={onClickPay}>
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
