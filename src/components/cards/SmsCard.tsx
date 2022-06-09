import React, {memo} from "react";
import {Container, Stack, TextField, Typography} from "@mui/material";
import StepCard from "../StepCard";
import CardHeader from "../CardHeader";
import NextButton from "../buttons/NextButton";

const SmsCard = () => {
    /*return <StepCard>
        <Stack direction="column"
               justifyContent="flex-start"
               alignItems="stretch"
        >
            <Stack direction="row"
                   padding="26px 26px 0 26px"
            >
                <BackButton onClick={() => console.log("clicked")}/>
            </Stack>
            <Stack direction="column"
                   alignItems="stretch"
                   padding="173px 143px 0 143px"
            >
                <Container sx={{alignSelf: "center"}}>
                    <CardHeader title="Код из СМС"/>
                </Container>
                <Stack direction="row"
                       gap="9px"
                       paddingTop="44px"
                       className="SMS-Text-field"
                       justifyContent="stretch"
                    // maxHeight="50px"
                >
                    <TextField inputProps={{style: { textAlign: "center", fontSize: "21px", lineHeight: "21px", letterSpacing: "12%" }}}
                               InputLabelProps={{style: {fontSize: "21px", lineHeight: "21px"}}}
                               sx={{ width: "262px",  height: "50px", maxHeight: "50px"}}
                               size="small"
                               variant="outlined"
                               placeholder="0000"
                    />
                    <NextButton/>
                </Stack>
                <Typography marginTop="16px" alignSelf="flex-start">Не пришел?</Typography>
            </Stack>
        </Stack>
    </StepCard>;*/
    return <StepCard goBack={() => console.log('back')}>
        <Stack alignSelf="center"
               alignItems="stretch"
               width="min(333px, 100%)"
               marginTop="30%"
        >
            <Container>
                <CardHeader title="Код из СМС"/>
            </Container>
            <Stack direction="row" spacing={1} marginTop="44px" className="SMS-Text-field" justifyContent="stretch">
                <TextField size="small" variant="outlined" placeholder="0000"
                           inputProps={{style: { textAlign: "center", fontSize: "21px", letterSpacing: "0.12em" }}}
                           InputLabelProps={{style: {fontSize: "21px"}}}
                />
                <NextButton handleClick={() => console.log("next")}/>
            </Stack>
            <Typography marginTop="16px" fontSize="max(1rem, 14px)" variant="subtitle1" alignSelf="flex-start">Не пришел?</Typography>
        </Stack>
    </StepCard>;
};

export default memo(SmsCard);
