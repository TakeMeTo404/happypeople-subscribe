import {memo, ReactNode} from "react";
import {Button, Stack, useTheme} from "@mui/material";
import {ReactComponent as ArrowRight} from '../../assets/img/arrowRight.svg';

type NextButtonProps = {
    handleClick: () => void
    children?: ReactNode
}

const NextButton = ({handleClick, children}: NextButtonProps) => {
    const theme = useTheme();
    return <Button variant="contained" onClick={handleClick} color="primary" sx={{bgcolor: "text.primary", borderRadius: "100px", ":hover": { background: "#000240", opacity: "0.8" }}}>
        {children ?
            <Stack direction="row" spacing={1} alignItems="center">
                {children}
                <ArrowRight height="35px" fill={theme.palette.text.secondary}/>
                {/*<img src={arrowRight} height="35%"/>*/}
            </Stack> :
            <ArrowRight height="35px" fill={theme.palette.text.secondary}/>

            // <img src={arrowRight} height="35%"/>
        }
    </Button>
}

export default memo(NextButton);
