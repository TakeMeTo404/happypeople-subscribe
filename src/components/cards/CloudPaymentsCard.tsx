import React, {memo} from "react";
import {Box, Container, Stack, TextField, Typography} from "@mui/material";
import StepCard from "../StepCard";
import CloudPaymentsForm from "../CloudPaymentsForm";
import NextButton from "../buttons/NextButton";
import {useIsMobile} from "../../hooks/useIsMobile";

const CloudPaymentsCard = () => {
    const isMobile = useIsMobile();

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
            <Stack direction="row" spacing={1} alignItems="center" sx={{mt: "5%"}}>
                <Typography variant={isMobile ? "h2" : "h1"}>199</Typography>
                <Stack direction="row" flexGrow="1">
                    <Stack direction="column" spacing={1} justifyContent="flex-start" flexShrink="0">
                        <Typography variant={isMobile ? "subtitle1" : "h5"} lineHeight="70%" align="left">₽</Typography>
                        <Typography variant={isMobile ? "subtitle1" : "h5"} lineHeight="70%" align="left">в месяц</Typography>
                    </Stack>
                    <Stack flexGrow="1"/>
                    <NextButton handleClick={() => console.log("оформить")}>
                        <Typography variant="h6" sx={{textTransform: "none", ml: 1, mr: 1}}>Оформить</Typography>
                    </NextButton>
                </Stack>
            </Stack>
        </Stack>
    </StepCard>;
};

export default memo(CloudPaymentsCard);
