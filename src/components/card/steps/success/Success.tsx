import React, {memo} from "react";
import {Avatar, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import CardBottomButton from "../../../buttons/CardBottomButton";
import DownLoadButton from "../../../buttons/DownLoadButton";
import boris from '../../../../assets/img/boris.png';
import CardContentWrapper from "../../CardContentWrapper";
import BackButton from "../../../buttons/BackButton";

type SuccessCardProps = {}

const Success = ({}: SuccessCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

    return <CardContentWrapper>
        <BackButton/>
        <Avatar src={boris} alt="avatar" sx={{
            width: isMobile ? "125px" : '125px',
            height: isMobile ? "125px" : '125px',
            mt: 1,
            transition: "0.3s",
            ":hover": {
                filter: "brightness(0.5)",
                cursor: "pointer",
                transform: "scale(1.02)"
            }
        }}/>
        <Stack spacing={2} sx={{mt: 5}}>
            <Typography variant="h4" align="center" lineHeight="70%" sx={{color: 'text.primary'}}>
                Борис,
            </Typography>
            <Typography variant="h4" align="center" lineHeight="70%" sx={{color: 'text.primary'}}>
                Ваша подписка активна!
            </Typography>
        </Stack>
        <Stack spacing={2} alignItems="stretch" width="min(100%, 266px)" sx={{mt: 5}}>
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
    </CardContentWrapper>;
}

export default memo(Success);
