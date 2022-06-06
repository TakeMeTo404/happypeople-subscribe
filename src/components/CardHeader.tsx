import {Typography, useTheme} from "@mui/material";
import React, {memo} from "react";

type CardHeaderProps = {
    title: string
}

const CardHeader = ({title}: CardHeaderProps) => {
    return <Typography fontSize="36px" fontWeight="400" sx={{
        color: "text.primary"
        }}
    >{title}</Typography>
}

export default memo(CardHeader);
