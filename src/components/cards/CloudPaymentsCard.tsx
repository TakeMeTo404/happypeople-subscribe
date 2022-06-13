import React, {memo} from "react";
import {Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import StepCard from "../StepCard";
import CloudPaymentsForm from "../CloudPaymentsForm";
import NextButton from "../buttons/NextButton";

const CloudPaymentsCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

    return <StepCard goBack={() => console.log('back')}>
        <Stack alignSelf="center"
               alignItems="stretch"
               width="min(500px, 100%)"
               marginTop="10%"
        >
            <Typography variant="h4" sx={{color: 'text.primary'}}>
                Вступайте в сообщество счастливых и расскажите о себе!
            </Typography>
            <Stack sx={{mt: "7%"}}>
                <CloudPaymentsForm/>
            </Stack>
            <Grid container rowSpacing={1} sx={{mt: "7%"}}>
                <Grid item xs>
                    <Stack direction="row" spacing={1} justifyContent="flex-start" alignSelf="flex-start">
                        <Typography variant="h2" align="left" lineHeight="70%">199</Typography>
                        <Stack direction="column" spacing={1} alignItems="flex-start" justifyContent="flex-start" sx={{pt: "2%"}}>
                            <Typography variant={isMobile ? "subtitle1" : "h5"} lineHeight="70%" align="left">₽</Typography>
                            <Typography variant={isMobile ? "subtitle1" : "h5"} lineHeight="70%" align="left">в месяц</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs="auto"/>
                <Grid item xs alignSelf="flex-end">
                    <Stack direction="row" justifyContent="flex-end">
                        <NextButton handleClick={() => console.log("оформить")}>
                            <Typography variant="h6" sx={{textTransform: "none", ml: 1, mr: 1}}>Оформить</Typography>
                        </NextButton>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    </StepCard>;
};

export default memo(CloudPaymentsCard);
