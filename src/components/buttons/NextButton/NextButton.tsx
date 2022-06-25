import {memo, ReactNode} from "react";
import classNames from "classnames";
import "./NextButton.css";
import {Button, Stack, useTheme} from "@mui/material";
import {ReactComponent as ArrowRight} from '../../../assets/img/arrowRight.svg';

type NextButtonProps = {
    handleClick: () => void,
    color?: 'primary' | 'secondary',
    children?: ReactNode
}

const NextButton = ({handleClick, children, color}: NextButtonProps) => {

    const buttonClasses = classNames(
        'next-button',
        {
            'next-button_primary': color === "primary",
            'next-button_secondary': color === "secondary"
        }
    )

    const iconClasses = classNames(
        'next-button__icon',
        {
            'primary': color === "secondary",
            'secondary': color === "primary"
        }
    )

    return <button className={buttonClasses} onClick={handleClick}>
        {children}
        <ArrowRight className={iconClasses}/>
    </button>;
}

export default memo(NextButton);
