import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import NextButton from "../../../buttons/next/NextButton";
import BackButton from "../../../buttons/back/BackButton";
import {useActions, useAppDispatch} from "../../../../hooks/redux";

import "./Name.css";
import {happyApi} from "../../../../services/HappyService";
import Loader from "../../loader/Loader";
import {Step} from "../../../../store/reducers/stepSlice";

const Name = () => {
    const dispatch = useAppDispatch();
    const {goStep} = useActions();
    const [setName, {isLoading, error: requestError, isSuccess}] = happyApi.useSetNameMutation();
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (isSuccess) dispatch(goStep(Step.PAY))
        else if (requestError) setError(() => 'Ошибка при загрузке данных')
    }, [isSuccess, requestError])

    const onNameChange = useCallback(() => {
        setError(() => '')
    }, []);

    const onClickNext = useCallback(() => {
        const name = nameInputRef.current?.value;
        if(!name) return setError("Введите имя");

        setName(name);
        setError(() => '')
    }, [])

    useEffect(() => {
        const listener = (e: any) => {
            if (e.code === 'Enter') {
                onClickNext(); // imitate
            }
        }
        document.addEventListener('keypress', listener)
        return () => document.removeEventListener('keypress', listener)
    }, [onClickNext])

    return <>
        <div className="card__content name">
            <div className="content__back-button-wrapper">
                <BackButton handleClick={() => dispatch(goStep(Step.SMS))}/>
            </div>
            <h2 className="card__title name__title">
                Как вас зовут?
            </h2>
            <p className="name__why">
                Чтобы Вы и участники сообщества, могли <br/>
                обращаться друг к другу по имени 🙌
            </p>
            <div className="name__controls">
                <div className="name-controls__line-1">
                    <input className="controls__name" ref={nameInputRef} onChange={onNameChange} placeholder="Борис"/>
                    <NextButton handleClick={onClickNext} color="primary"/>
                </div>
                {error && <span className="name-controls__error">{error}</span>}
            </div>
        </div>

        <Loader visible={isLoading}/>
    </>;
};

export default memo(Name);
