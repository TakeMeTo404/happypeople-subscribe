import React, {memo} from "react";
import {Container, Stack, TextField, Typography} from "@mui/material";
import StepCard from "../StepCard";
import NextButton from "../buttons/NextButton";

const NameCard = () => {
    return <StepCard goBack={() => console.log('back')}>
        <Stack alignSelf="center"
               alignItems="stretch"
               width="min(333px, 100%)"
               marginTop="30%"
        >
            <Container>
                <Typography variant="h4" sx={{color: 'text.primary'}}>Как Вас зовут?</Typography>
                <Typography fontSize="min(13px, 1rem)" lineHeight="min(13px, 1rem)">Чтобы Вы и участники сообщества, могли
                    обращаться друг к другу по имени 🙌</Typography>
            </Container>
            <Stack direction="row" spacing={1.5} marginTop="40px" className="Name-Text-field" justifyContent="stretch">
                <TextField size="small" variant="outlined" placeholder="Борис"
                           inputProps={{style: { fontSize: "21px" }}}
                           InputLabelProps={{style: {fontSize: "21px"}}}
                />
                <NextButton handleClick={() => console.log("next")}/>
            </Stack>
        </Stack>
    </StepCard>;
};

export default memo(NameCard);
