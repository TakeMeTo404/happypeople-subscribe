import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import photo1 from '../../../../assets/img/photo-1.png';
import photo2 from '../../../../assets/img/photo-2.png';
import photo3 from '../../../../assets/img/photo-3.png';
import photo4 from '../../../../assets/img/photo-4.png';
import photo5 from '../../../../assets/img/photo-5.png';
import checked from '../../../../assets/img/checked.svg';
import NextButton from "../../../buttons/next/NextButton";
import useDebounce from "../../../../hooks/useDebounce";
import {useActions, useAppDispatch} from "../../../../hooks/redux";

import "./Phone.css";
import {happyApi} from "../../../../services/HappyService";
import Loader from "../../loader/Loader";

const inputValueToPhone = (value: string | undefined) => {
    if (!value) return "";

    const chars: string[] = value.split('');
    const noSpaces = chars.filter(char => !([' ', '-', '–'].includes(char)))
    return '+7' + noSpaces.join('');
};

const validate = (phone: string): boolean => {
    if (phone[0] !== "+") return false;

    // 12 – длина телефона с кодом +7 в начале
    if (phone.length !== 12) return false;

    const allowed = "01234567890".split('');
    const digits = phone.split('')
        .slice(1, phone.length)
        .filter(char => allowed.includes(char));

    return digits.length === 11;
};

const Phone = () => {
    const [visibleLoader, setVisibleLoader] = useState(false);
    useEffect(() => {
        // setTimeout(() => setVisibleLoader(true), 2000)
        // setTimeout(() => setVisibleLoader(false), 5000)
        // setTimeout(() => setVisibleLoader(true), 9000)
        // setTimeout(() => dispatch(next()), 13000)

    }, []);

    const dispatch = useAppDispatch();
    const {next} = useActions();
    const inputRef = useRef<HTMLInputElement>(null);
    // const [phone, setPhone] = useState<string>('');
    const [formatError, setFormatError] = useState<boolean>(false)
    const [sendSMS, {isLoading, isSuccess, isUninitialized, error: requestError}] = happyApi.useSendSMSMutation();

    const error = (formatError && "Номер неправильного формата");

    useEffect(() => {
        if (isSuccess) dispatch(next());
    }, [isSuccess])

    const validateInput = useCallback(() => {
        if (validate(inputValueToPhone(inputRef.current?.value))) {
            return setFormatError(() => false)
        }
        setFormatError(() => true)
    }, [])

    const debouncedValidation = useDebounce(validateInput, 1000);

    const onInputChange = useCallback(() => {
        setFormatError(() => false);
        debouncedValidation();
    }, [debouncedValidation])

    // const onInputChange = useDebounce(validateInput, 1000);
    const onInputBlur = validateInput;

    const onClickNext = useCallback(() => {
        const phone = inputValueToPhone(inputRef.current?.value)
        if (validate(phone)) {
            sendSMS(phone)
            return setFormatError(() => false)
        }
        setFormatError(() => true)
    }, [sendSMS])

    return <>
            <div className="card__content phone">
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
                <div className="controls__line-1">
                    <div className="controls__telephone">
                    <span className="telephone__code">
                        +7
                    </span>
                        <input ref={inputRef} onBlur={onInputBlur} onChange={onInputChange} className="telephone__number" placeholder="999 999 99 99"/>
                    </div>
                    <NextButton handleClick={onClickNext} color="primary"/>
                </div>
                {error && <span className="controls__error">
                    {error}
                </span>}
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
        </div>
        <Loader visible={isLoading}/>
    </>;
}

export default memo(Phone);
