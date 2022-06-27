import React, {memo} from "react";
import NextButton from "../../../buttons/NextButton/NextButton";
import BackButton from "../../../buttons/BackButton";
import useActions from "../../../../hooks/useActions";
import "./Name.css";

const Name = () => {
    const {goNext, goBack} = useActions();

    return <div className="card__content name">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={goBack}/>
        </div>
        <h2 className="name__title">
            Как вас зовут?
        </h2>
        <p className="name__why">
            Чтобы Вы и участники сообщества, могли <br/>
            обращаться друг к другу по имени 🙌
        </p>
        <div className="name__controls">
            <input className="controls__name" placeholder="Борис"/>
            <NextButton handleClick={goNext} color="primary"/>
        </div>
    </div>;
};

export default memo(Name);
