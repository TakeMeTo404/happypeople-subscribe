import React, {memo, useMemo} from "react";
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
import moment from "moment";

const Success = () => {
    const dispatch = useAppDispatch();
    const {goStep} = useActions();

    const meState = happyApi.useMeQuery();
    const cardsState = happyApi.useCardsQuery();

    const isLoading = meState.isLoading || cardsState.isLoading;

    const avatarUrl = meState.data?.my_data.avatars?.medium;

    const dateText = useMemo<string>(() => {
        const startedAt = meState.data?.my_data?.subscription_started_at;

        if (!startedAt) return 'до ** ***';

        const endDate = moment(startedAt).add(1, 'months');

        var mapMonth = (m: string): string => {
            switch (m) {
                case '1': return "Янв";
                case '2': return "Фев";
                case '3': return "Мар";
                case '4': return "Апр";
                case '5': return "Мая";
                case '6': return "Июн";
                case '7': return "Июл";
                case '8': return "Авг";
                case '9': return "Сен";
                case '10': return "Окт";
                case '11': return "Ноя";
                case '12': return "Дек";
            }
            return ""
        }

        return `до ${endDate.format('D')} ${mapMonth(endDate.format('M'))}`
    }, [meState.data])

    const name = meState.data?.my_data.full_name;

    const digits = cardsState.data?.cards[0].CardLastFour?.slice(1, 4) || null;
    const type = cardsState.data?.cards[0].CardType || null;
    const cardText = digits && type && `*${digits} ${type}`;

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
