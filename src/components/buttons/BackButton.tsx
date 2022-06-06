import {memo} from "react";

type BackButtonProps = {
    onClick: () => void;
}

const BackButton = ({onClick}: BackButtonProps) => {
    return <svg onClick={onClick} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="31.5" stroke="#EAEAEA"/>
        <path d="M32.5 21L27 31.5L32.5 42" stroke="#000347"/>
    </svg>
}

export default memo(BackButton);
