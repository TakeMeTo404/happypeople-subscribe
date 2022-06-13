import React, {FC, ReactNode, memo} from "react";
import {Box, Container, Icon, IconButton, Stack} from "@mui/material";
import back from "../assets/img/back.svg";

type StepCardProps = {
    goBack?: () => void
    children?: ReactNode
}

const StepCard: FC<StepCardProps> = ({goBack, children}) => {
    return <Stack alignItems="center" sx={{
        width: 'min(100vw, 619px)',
        height: 'min(100vh, 829px)',
        background: "white",
        boxShadow: "0 0 34px rgba(0, 0, 0, 0.08)",
        borderRadius: "20px",
        padding: '26px'
    }}
    >
        {goBack &&
            <IconButton sx={{alignSelf: "flex-start"}}>
                <img src={back} height={64} width={64}/>
            </IconButton>
        }
        {children}
    </Stack>
}

export default memo(StepCard);
