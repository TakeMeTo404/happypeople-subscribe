import React, {memo} from "react";
import {Button, Typography} from "@mui/material";

type CardBottomButtonProps = {
    text: string,
    handleClick: () => void;
}

const CardBottomButton = ({text, handleClick}: CardBottomButtonProps) => {
    return <Button onClick={handleClick}><Typography variant="subtitle2" sx={{
        color: 'text.primary',
        textTransform: "none",
        ":hover": {
            transform: "scale(1.1)"
        }
    }}>
        {text}
    </Typography></Button>
}

export default memo(CardBottomButton);
