import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {Button} from "@mui/material";
import NextButton from "../../../buttons/next/NextButton";
import BackButton from "../../../buttons/back/BackButton";
import {useActions, useAppDispatch} from "../../../../hooks/redux";
import {stepSlice} from "../../../../store/reducers/stepSlice";
import "./SMS.css";
import {happyApi} from "../../../../services/HappyService";
import Loader from "../../loader/Loader";
import useDebounce from "../../../../hooks/useDebounce";

const validate = (code: string): boolean => {
    if (!code) return false;
    if (code.length !== 4) return false;

    const digits = "0123456789".split('');
    return code.split('')
        .filter(c => digits.includes(c))
        .length === 4;
}

const SMS = () => {
    const dispatch = useAppDispatch();
    const [verify, {data, isLoading, isSuccess, error: requestError}] = happyApi.useVerifyMutation();
    const codeInputRef = useRef<HTMLInputElement>(null);
    const {next, back, setCredentials, resetAuth} = useActions();

    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (requestError) setError('Ошибка при загрузке данных')
    }, [requestError])

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setCredentials(data));
            dispatch(next())
        }
    }, [isSuccess, data])

    const debouncedVerify = useDebounce(verify, 1000);

    const debouncedSetError = useDebounce(setError, 1000);

    const onChange = useCallback(() => {
        if (isLoading) return;

        const code = codeInputRef.current?.value || '';

        if (validate(code)) {
            verify(code);
            return setError('')
        }

        setError('');
        debouncedSetError('Введите код из 4 цифр');




    }, [debouncedSetError])

    const onClickNext = useCallback(() => {
        const code = codeInputRef.current?.value || '';

        if (validate(code)) {
            verify(code);
            return setError(() => '');
        }
        setError("Введите код из 4 цифр")
    }, [])

    const onClickBack = useCallback(() => {
        dispatch(resetAuth());
        dispatch(back());
    }, [])

    const onClickNotReceived = useCallback(() => {
        alert("Попробуйте заново отправить код или потворите попытку позже")
    }, [])

    return <>
        <div className="card__content sms">
            <div className="content__back-button-wrapper">
                <BackButton handleClick={onClickBack}/>
            </div>
            <h2 className="card__title sms__title">
                Код из СМС
            </h2>
            <div className="sms__controls">
                <div className="controls__line-1">
                    <input className="line-1__code" ref={codeInputRef} placeholder="0000"/>
                    <NextButton handleClick={onClickNext} color="primary"/>
                </div>
                {error && <span className="controls__error">
                    {error}
                </span>}
                <Button className="controls__resend" onClick={onClickNotReceived}>Не пришел?</Button>
            </div>
        </div>

        <Loader visible={isLoading}/>
    </>;
};

export default memo(SMS);
