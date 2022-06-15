import {memo} from "react";
import {IconButton} from "@mui/material";
import {ReactComponent as Back} from "../../assets/img/back.svg";
import useActions from "../../hooks/useActions";

const BackButton = () => {
    const {goBack} = useActions();

    return <IconButton onClick={goBack} sx={{alignSelf: "flex-start", mt: 3, ml: 3}}>
        <Back height={64} width={64}/>
    </IconButton>
}

export default memo(BackButton);
