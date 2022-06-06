import {memo} from "react";
import {Stack, Container, Typography} from "@mui/material";

type HeaderOptions = {
    color: "primary" | "secondary"
}

const Header = ({color}: HeaderOptions) => {
    return <Stack direction="row"
        alignItems="center"
        height="117px"
        paddingLeft="95px"
    >
        <Typography sx={{
            color: `text.${color}`
        }}
            fontSize="40px"
            fontWeight="400"
            letterSpacing="1%"
            textAlign="center"
        >
            :) счастливые
        </Typography>
    </Stack>;
}

export default memo(Header);
