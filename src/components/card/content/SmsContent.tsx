import React, {memo} from "react";
import {Button, Container, Stack, TextField} from "@mui/material";
import CardHeader from "../../CardHeader";
import NextButton from "../../buttons/NextButton";
import BackButton from "../../buttons/BackButton";
import CardContentWrapper from "../CardContentWrapper";
import useActions from "../../../hooks/useActions";

const SmsContent = () => {
    const {goNext} = useActions();

    return <CardContentWrapper>
        <BackButton/>
        <Container sx={{mt: "30%"}}>
            <CardHeader title="Код из СМС"/>
        </Container>
        <Stack width="min(100%, 333px)"
               sx={{mt: 4}}
        >
            <Stack direction="row" spacing={1} className="SMS-Text-field" justifyContent="stretch">
                <TextField size="small" variant="outlined" placeholder="0000"
                           inputProps={{style: { textAlign: "center", fontSize: "21px", letterSpacing: "0.12em" }}}
                           InputLabelProps={{style: {fontSize: "21px"}}}
                />
                <NextButton handleClick={goNext}/>
            </Stack>
            <Button sx={{alignSelf: "flex-start", color: "text.primary", textTransform: "none", mt: 2}}>Не пришел?</Button>
        </Stack>
    </CardContentWrapper>;
};

export default memo(SmsContent);
