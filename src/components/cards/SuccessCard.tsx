import React, {memo} from "react";
import {Avatar, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import StepCard from "../StepCard";
import CardBottomButton from "../buttons/CardBottomButton";
import DownLoadButton from "../buttons/DownLoadButton";
import boris from '../../assets/img/boris.png';

type SuccessCardProps = {}

const SuccessCard = ({}: SuccessCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

    return <StepCard goBack={() => console.log('back')}>
        <Stack spacing={6} alignItems="center"
               justifyContent="flex-start"
               width="min(500px, 100%)"
               flexGrow={1}
        >
            <Avatar src={boris} alt="avatar" sx={{
                width: isMobile ? "125px" : '125px',
                height: isMobile ? "125px" : '125px',
                transition: "0.3s",
                ":hover": {
                    filter: "brightness(0.5)",
                    cursor: "pointer",
                    transform: "scale(1.02)"
                }
            }}/>
            <Stack spacing={3}>
                <Typography variant="h4" lineHeight="70%" sx={{color: 'text.primary'}}>
                    Борис,
                </Typography>
                <Typography variant="h4" lineHeight="70%" sx={{color: 'text.primary'}}>
                    Ваша подписка активна!
                </Typography>
            </Stack>
            <Stack spacing={2} alignItems="stretch" width="min(100%, 266px)">
                <DownLoadButton variant="ios"/>
                <DownLoadButton variant="android"/>
            </Stack>
            <Stack justifyContent="flex-end" flexGrow={1}>
                <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{opacity: 0.5}}>
                    {[
                        {text: "до 23 Мар", handleClick: () => console.log("до 23 марта")},
                        {text: "*342 Mastercard", handleClick: () => console.log("*342 Mastercard")},
                        {text: "Отменить?", handleClick: () => console.log("Отменить?")}
                    ].map((props) =>
                        <Grid item key={props.text}>
                            <CardBottomButton {...props}/>
                        </Grid>
                    )
                    }
                </Grid>
            </Stack>
        </Stack>
    </StepCard>;
}

export default memo(SuccessCard);
