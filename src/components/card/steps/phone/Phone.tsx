import React, {memo, useEffect, useRef} from "react";
import photo1 from '../../../../assets/img/photo-1.png';
import photo2 from '../../../../assets/img/photo-2.png';
import photo3 from '../../../../assets/img/photo-3.png';
import photo4 from '../../../../assets/img/photo-4.png';
import photo5 from '../../../../assets/img/photo-5.png';
import checked from '../../../../assets/img/checked.svg';
import NextButton from "../../../buttons/next/NextButton";
import useActions from "../../../../hooks/useActions";
import "./Phone.css";

const Phone = () => {
    const {goNext} = useActions();
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        setTimeout(() => {
            // inputRef.current?.focus();
        }, 2000)
    }, [])

    return <div className="card__content phone">
        <ul className="phone__photos">
            {[ photo1, photo2, photo3, photo4, photo5 ]
                .map((photo, index) => (
                    <li key={index} className="photos__item">
                        <img src={photo} alt="Фотография с фестиваля #счастливых"/>
                    </li>
                ))
            }
        </ul>
        <h2 className="card__title phone__title">
            Присоединяйтесь, <br/>
            и расскажите о себе
        </h2>
        <div className="phone__controls">
            <div className="controls__telephone">
                <span className="telephone__code">
                    +7
                </span>
                <input className="telephone__number" placeholder="999 999 99 99"/>
            </div>
            <NextButton handleClick={goNext} color="primary"/>
        </div>
        <div className="phone__agree">
            <img src={checked} alt="Иконка согласия с правилами" className="agree__checkbox"/>
            <span className="agree__text">
                Регистрируясь, вы соглашаетесь<br/>
                <a href="#" className="text__link">
                    с правилами использования приложения
                </a>
            </span>
        </div>
    </div>;
}

export default memo(Phone);
