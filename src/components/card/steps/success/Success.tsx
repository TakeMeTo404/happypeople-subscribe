import React, {memo} from "react";
import { Button} from "@mui/material";
import boris from '../../../../assets/img/boris.png';
import { ReactComponent as Ios}  from '../../../../assets/img/ios.svg';
import { ReactComponent as Android } from '../../../../assets/img/android.svg';
import BackButton from "../../../buttons/back/BackButton";
import {useActions, useAppDispatch} from "../../../../hooks/redux";
import {Step} from "../../../../store/reducers/stepSlice";
import "./Success.css";

const Success = () => {
    const dispatch = useAppDispatch();
    const {goStep} = useActions();

    return <div className="card__content name">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={() => dispatch(goStep(Step.PAY))}/>
        </div>
        <img src={boris} alt="Ваш аватар" className="success__avatar"/>
        <h2 className="card__title success__title">
            Борис,<br/>
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
                {text: "до 23 Мар", handleClick: () => console.log("до 23 марта")},
                {text: "*342 Mastercard", handleClick: () => console.log("*342 Mastercard")},
                {text: "Отменить?", handleClick: () => console.log("Отменить?")}
            ].map(({text, handleClick}, index) =>
                <Button key={index} onClick={handleClick} className="info__button">
                    <span className="info__text">
                        {text}
                    </span>
                </Button>
            )}
        </div>
    </div>;
}

export default memo(Success);
