import React, {memo} from "react";
import {Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import CloudPaymentsForm from "../../CloudPaymentsForm";
import NextButton from "../../buttons/NextButton";
import CardContentWrapper from "../CardContentWrapper";
import useActions from "../../../hooks/useActions";
import BackButton from "../../buttons/BackButton";

const PayContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    const {goNext} = useActions();

    return <CardContentWrapper>
        <BackButton/>
        <Typography variant="h4" sx={{color: 'text.primary', mt: 4}} width="min(100%, 380px)" align="center">
            Вступайте в сообщество счастливых и расскажите о себе!
        </Typography>
        <Stack sx={{mt: 4, width: "min(100%, 501px)"}} spacing={5}>
            <CloudPaymentsForm/>
            <Grid container rowSpacing={1} sx={{mt: 4}}>
                <Grid item xs>
                    <Stack direction="row" spacing={1} justifyContent="flex-start" alignSelf="flex-start">
                        <Typography variant="h2" align="left" lineHeight="70%">199</Typography>
                        <Stack direction="column" spacing={1} alignItems="flex-start" justifyContent="flex-start" sx={{pt: "2%"}}>
                            <Typography variant={isMobile ? "subtitle1" : "h5"} lineHeight="70%" align="left">₽</Typography>
                            <Typography variant={isMobile ? "subtitle1" : "h5"} lineHeight="70%" align="left">в месяц</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs="auto" flexGrow={1}/>
                <Grid item xs alignSelf="flex-end">
                    <Stack direction="row" justifyContent="flex-end">
                        <NextButton handleClick={goNext}>
                            <Typography variant="h6" sx={{textTransform: "none", ml: 1, mr: 1}}>Оформить</Typography>
                        </NextButton>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    </CardContentWrapper>;
};

export default memo(PayContent);
