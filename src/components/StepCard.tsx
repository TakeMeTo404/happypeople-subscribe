import React, {FC, ReactNode, memo} from "react";
import {Box, Container, Icon, IconButton, Stack} from "@mui/material";
import back from "../assets/img/back.svg";

type StepCardProps = {
    goBack?: () => void
    children?: ReactNode
}

const StepCard: FC<StepCardProps> = ({goBack, children}) => {
    return <Stack alignItems="stretch" sx={{
        width: 'min(100%, 619px)',
        minHeight: '821px',
        background: "white",
        boxShadow: "0 0 34px rgba(0, 0, 0, 0.08)",
        borderRadius: "20px",
        padding: '26px'
    }}
    >
        {goBack && <Stack justifyContent="flex-start">
            <IconButton sx={{mr: 'auto'}}>
                <img src={back} height={64} width={64}/>
            </IconButton>
        </Stack>}
        {children}
    </Stack>
}

export default memo(StepCard);
