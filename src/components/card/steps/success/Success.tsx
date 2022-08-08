import React, {memo} from "react";
import { Button } from "@mui/material";
import hand from '../../../../assets/img/hand.png';
import { ReactComponent as Ios}  from '../../../../assets/img/ios.svg';
import { ReactComponent as Android } from '../../../../assets/img/android.svg';
import BackButton from "../../../buttons/back/BackButton";
import {useActions, useAppDispatch} from "../../../../hooks/redux";
import Loader from "../../loader/Loader";
import {Step} from "../../../../store/reducers/stepSlice";
import {happyApi} from "../../../../services/HappyService";

import "./Success.css";

const Success = () => {
    const dispatch = useAppDispatch();
    const {goStep} = useActions();

    const meState = happyApi.useMeQuery();
    const cardsState = happyApi.useCardsQuery();

    const isLoading = meState.isLoading || cardsState.isLoading;

    const avatarUrl = meState.data?.my_data.avatars?.medium;

    const name = meState.data?.my_data.full_name;

    const digits = cardsState.data?.cards[0].CardLastFour?.slice(1, 4) || null;
    const type = cardsState.data?.cards[0].CardType || null;
    const cardText = digits && type && `*${digits} ${type}`;

    const dateText = 'до 23 Мар';

    return <>
        {!isLoading &&
            <div className="card__content name">
                <div className="content__back-button-wrapper">
                    <BackButton handleClick={() => dispatch(goStep(Step.PAY))}/>
                </div>
                <img src={avatarUrl || hand} alt="Ваш аватар" className="success__avatar"/>
                <h2 className="card__title success__title">
                    {name && <>{name},<br/></>}
                    Ваша подписка активна!
                </h2>
                <section className="success__download">
                    <Button className="download-button">
                        <Ios className="download-button__icon primary"/>
                        <span className="download-button__text primary">
                        Скачать в AppStore
                    </span>
                    </Button>
                    <Button className="download-button">
                        <Android className="download-button__icon primary"/>
                        <span className="download-button__text primary">
                        Скачать в Google Play
                    </span>
                    </Button>
                </section>
                <div className="success__info">
                    {[
                        {text: dateText || "1 месяц", handleClick: () => console.log("clicked on date")},
                        {text: cardText || '****', handleClick: () => console.log("clicked on card")},
                        {text: "Отменить?", handleClick: () => alert("Для отмены подписки напишите в чат поддержки")}
                    ].map(({text, handleClick}, index) =>
                        <Button key={index} onClick={handleClick} className="info__button">
                        <span className="info__text">
                            {text}
                        </span>
                        </Button>
                    )}
                </div>
            </div>
        }

        <Loader visible={isLoading}/>
    </>;
}

export default memo(Success);
