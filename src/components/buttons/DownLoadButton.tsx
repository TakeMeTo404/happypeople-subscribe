import React, {memo} from "react";
import {Button, Stack, Typography} from "@mui/material";
import ios from '../../assets/img/ios.svg';
import android from '../../assets/img/android.svg';

type Variant = "ios" | "android";

type DownLoadButtonProps = {
    variant: Variant
}

const iconByVariant = (variant: Variant) => {
    return (variant === 'ios') ? ios : android;
};

const titleByVariant = (variant: Variant) => {
    return (variant === 'ios') ? 'Скачать в AppStore' : 'Скачать в Google Play';
};

const DownLoadButton = ({variant}: DownLoadButtonProps) => {

    const icon = iconByVariant(variant);
    const title = titleByVariant(variant);

    return <Button variant="contained" sx={{
        bgcolor: "text.secondary",
        borderRadius: "100px",
        ':hover': {
            opacity: 0.8,
            bgcolor: "text.secondary",
            transform: "scale(1.05)"
        }
    }}>
        <Stack direction="row" spacing={1} padding="6% 5% 6% 3%" alignItems="center">
            <img src={icon} height="35%"/>
            <Typography variant="h6" color="text.primary" sx={{textTransform: "none"}}>{title}</Typography>
        </Stack>
    </Button>
}

export default memo(DownLoadButton);
