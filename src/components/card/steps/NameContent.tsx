import React, {memo} from "react";
import {Container, Stack, TextField, Typography} from "@mui/material";
import NextButton from "../../buttons/NextButton/NextButton";
import CardContentWrapper from "../CardContentWrapper";
import BackButton from "../../buttons/BackButton";
import useActions from "../../../hooks/useActions";

const NameContent = () => {
    const {goNext} = useActions();

    return <CardContentWrapper>
        <BackButton/>
        <Stack width="min(100%, 333px)" sx={{mt: 15}}>
            <Typography variant="h4" align="center" sx={{color: 'text.primary'}}>Как Вас зовут?</Typography>
            <Typography fontSize="min(13px, 1rem)" align="center" lineHeight="min(13px, 1rem)">
                Чтобы Вы и участники сообщества, могли
                обращаться друг к другу по имени 🙌</Typography>
        </Stack>
        <Stack direction="row" spacing={1.5} sx={{mt: 4}} className="Name-Text-field" justifyContent="stretch">
            <TextField size="small" variant="outlined" placeholder="Борис"
                       inputProps={{style: { fontSize: "21px" }}}
                       InputLabelProps={{style: {fontSize: "21px"}}}
            />
            <NextButton handleClick={goNext}/>
        </Stack>
    </CardContentWrapper>;
};

export default memo(NameContent);
