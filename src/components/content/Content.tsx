import React, {memo} from "react";
import "./Content.css";
import {ReactComponent as Hand} from "../../assets/img/hand.svg";
import NextButton from "../buttons/NextButton/NextButton";
import screen1 from '../../assets/img/screen1.png';
import screen2 from '../../assets/img/screen2.png';
import screen3 from '../../assets/img/screen3.png';

const Content = () => {
    const onClickJoin = () => {
        console.log("clicked to join")
    }

    return <div className="content">
        <section className="content__community">
            <h1 className="community__title">
                Люди. Сообщества.<br/>Территории
            </h1>
            <p className="community__paragraph">
                Мы сообщество деятельных людей. Мы ремесленники
                и предприниматели, дизайнеры и фермеры, художники
                и строители, рестораторы, программисты и многие другие. Вообще все те, кому не сидится на месте!<br/>
                <br/>
                Мы живем и работаем на разных территориях и хотим, чтобы жизнь вокруг нас с каждом годом становилась лучше и интереснее и чтобы все больше счастливых людей появлялось в наших местах.
            </p>
        </section>
        <div className="content__screens-container">
            <img src={screen1} alt="Скрин 1 приложения #счастливые" className="content__screen"/>
            <img src={screen2} alt="Скрин 2 приложения #счастливые" className="content__screen"/>
            <img src={screen3} alt="Скрин 3 приложения #счастливые" className="content__screen"/>
        </div>
        <section className="content__what-you-get">
            <h2 className="what-you-get__question">
                Что вы получаете?
            </h2>
            <ul className="what-you-get__statements-container">
                {[
                    <>Предложите продукты<br/>и услуги клиентам рядом</>,
                    <>Участие в фестивалях<br/>#счастливых бесплатно</>,
                    <>Получайте отзывы на<br/>ваши продукты и услуги</>,
                    <>Знакомьтесь и находите<br/>новых друзей</>,
                    <>Предложите продукты<br/>частью #счастливых</>
                ].map((text) => (
                    <li className="statement primary">
                        <Hand className="statement__hand"/>
                        <h3 className="statement__text">
                            {text}
                        </h3>
                    </li>
                ))}
            </ul>
        </section>
        <section className="content__who-else">
            <h2 className="who-else__question">
                Кто уже на платформе?
            </h2>
            <p className="who-else__paragraph">
                Самые интересные предприниматели и ремесленники, самые талантливые мастера и художники, самые красивые и запоминающиеся места, самые вкусные завтраки и обеды, самые полезные фермерские продукты и уютные гостевые дома.<br/>
                <br/>
                У вас кафе или магазин, вы шьете одежду или программируете, варите сыр или ремонтируете машины, создаете мебель или обучаете детей. Нам нужны все! Мы приглашаем всех тех, кто делает что-то важное, нужное и полезное на своей территории!
            </p>
        </section>
        <div className="content__join">
            <NextButton handleClick={onClickJoin} color="secondary">
                <h3 className="join__text">
                    Присоединиться
                </h3>
            </NextButton>
        </div>
        <section className="content__credentials">
            <h4 className="credential">ИП Акимов Б.А.</h4>
            <h4 className="credential">hello@happies.ru</h4>
        </section>
    </div>;
};

export default memo(Content);
