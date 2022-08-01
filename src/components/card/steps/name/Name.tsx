import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import NextButton from "../../../buttons/next/NextButton";
import BackButton from "../../../buttons/back/BackButton";
import {useActions, useAppDispatch} from "../../../../hooks/redux";

import "./Name.css";
import {happyApi} from "../../../../services/HappyService";
import Loader from "../../loader/Loader";

const Name = () => {
    const dispatch = useAppDispatch();
    const {next, back} = useActions();
    const [setName, {isLoading, error: requestError, isSuccess}] = happyApi.useSetNameMutation();
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (isSuccess) dispatch(next())
    }, [isSuccess])

    const onClickNext = useCallback(() => {
        const name = nameInputRef.current?.value;
        if(!name) return setError("Введите имя");

        setName(name);
        setError(() => '')
    }, [])

    return <>
        <div className="card__content name">
            <div className="content__back-button-wrapper">
                <BackButton handleClick={() => dispatch(back())}/>
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
                    <input className="controls__name" ref={nameInputRef} placeholder="Борис"/>
                    <NextButton handleClick={onClickNext} color="primary"/>
                </div>
                {error && <span className="name-controls__error">{error}</span>}
            </div>
        </div>

        <Loader visible={isLoading}/>
    </>;
};

export default memo(Name);
