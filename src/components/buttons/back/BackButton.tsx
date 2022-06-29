import {memo} from "react";
import {IconButton} from "@mui/material";
import {ReactComponent as Back} from "../../../assets/img/back.svg";
import "./BackButton.css";

type BackButtonProps = {
    handleClick?: () => void;
}

const BackButton = ({handleClick}: BackButtonProps) => {
    return <IconButton onClick={handleClick}>
        <Back className="back-button"/>
    </IconButton>;
}

export default memo(BackButton);
