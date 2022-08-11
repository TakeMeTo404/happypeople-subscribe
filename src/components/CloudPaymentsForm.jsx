import React, {memo} from "react"
import {Stack, Typography} from "@mui/material";

const CloudPaymentsForm = () => {
    return <Stack justifyContent="center" sx={{height: "336px", width: "100%", background: "#D9D9D9", opacity: "0.2", borderRadius: "10px"}}>
        <Typography align="center" color="black" sx={{opacity: "0.8"}}>здесь появится форма от cloudpayments</Typography>
    </Stack>
}

export default memo(CloudPaymentsForm);
