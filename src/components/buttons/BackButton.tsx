import {memo} from "react";
import {IconButton} from "@mui/material";
import {ReactComponent as Back} from "../../assets/img/back.svg";

type BackButtonProps = {
    handleClick?: () => void;
}

const BackButton = ({handleClick}: BackButtonProps) => {
    return <IconButton onClick={handleClick}>
        <Back height="4rem" width="4rem"/>
    </IconButton>;
}

export default memo(BackButton);
