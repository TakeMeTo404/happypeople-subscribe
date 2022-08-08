import React, {memo, useCallback} from "react";
import CloudPaymentsForm from "../../../CloudPaymentsForm";
import NextButton from "../../../buttons/next/NextButton";
import {useActions, useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import BackButton from "../../../buttons/back/BackButton";
import showWidget from "./showWidget";

import "./Pay.css";
import {Step} from "../../../../store/reducers/stepSlice";

const Pay = () => {
    const dispatch = useAppDispatch();
    const {goStep} = useActions();
    const username = useAppSelector(state => state.auth.user?.full_name);

    const id = useAppSelector(state => state.auth.user?.id)

    const onClickPay = useCallback(() => {
        if (!id) return console.error('id is undefined')

        const onSuccess = () => {
            dispatch(goStep(Step.SUCCESS))
        }
        const onFail = () => {
        }
        showWidget(`${id}`, onSuccess, onFail);
    }, [id])

    const onClickBack = useCallback(() => {
        dispatch(goStep(
            username ? Step.SMS : Step.NAME
        ))
    }, [username]);

    return <div className="card__content name">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={onClickBack}/>
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
