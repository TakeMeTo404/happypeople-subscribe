import {memo, ReactNode} from "react";
import {Button, Stack} from "@mui/material";
import arrowRight from '../../assets/img/arrowRight.svg';

type NextButtonProps = {
    handleClick: () => void
    children?: ReactNode
}

const NextButton = ({handleClick, children}: NextButtonProps) => {
    return <Button variant="contained" onClick={handleClick} color="primary" sx={{bgcolor: "text.primary", borderRadius: "100px", ":hover": { background: "#000240", opacity: "0.8" }}}>
        {children ?
            <Stack direction="row" spacing={1} alignItems="center">
                {children}
                <img src={arrowRight} height="35%"/>
            </Stack> :
            <img src={arrowRight} height="35%"/>
        }
    </Button>
}

export default memo(NextButton);
