import {memo, ReactNode} from "react";
import {Button, IconButton, Stack, SvgIcon, Typography, useTheme} from "@mui/material";
import arrowRight from '../../assets/img/arrowRight.svg';
/*const NextButton = () => {
    const theme = useTheme();

    return <Typography
        textAlign="center"
        bgcolor={theme.palette.text.primary}
        color={theme.palette.text.secondary}
        fontSize="21px"
        borderRadius="100px"
        width="62px"
        height="50px"
    >→</Typography>
}*/
/*
const NextButton = () => {
    return <svg width="62" height="50" viewBox="0 0 62 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="61" height="49" rx="24.5" fill="#000347" stroke="#000347"/>
        <path d="M33.642 31.462C33.789 28.501 35.553 26.737 38.178 26.506V24.868C35.553 24.637 33.789 22.894 33.642 19.933L31.689 20.353C31.794 21.424 32.172 22.369 32.802 23.23C33.453 24.07 34.188 24.616 35.028 24.868H21.84V26.506H35.028C34.188 26.758 33.453 27.304 32.802 28.165C32.172 29.026 31.794 29.971 31.689 31.021L33.642 31.462Z" fill="#E5FFD5"/>
    </svg>;
}
*/

// const NextButton = () => {
//     const theme = useTheme();
//
//     return <Stack bgcolor={theme.palette.text.primary}
//                   borderRadius="100px"
//                   width="62px"
//                   height="50px"
//                   justifyContent="center"
//                   alignItems="center"
//     >
//         <img width="19px" height="21px" src={arrowRight}/>
//     </Stack>;
//     <Typography
//         textAlign="center"
//         bgcolor={theme.palette.text.primary}
//         color={theme.palette.text.secondary}
//         fontSize="21px"
//         borderRadius="100px"
//         width="62px"
//         height="50px"
//     >→</Typography>
// }

type NextButtonProps = {
    handleClick: () => void
    children?: ReactNode
}

const NextButton = ({handleClick, children}: NextButtonProps) => {
    const theme = useTheme();
    // return <Button>
    //     <Stack direction="row" borderRadius="100px"
    //            justifyContent="center"
    //            alignItems="center"
    //            sx={{bgcolor: "text.primary"}}
    //            flexGrow="1"
    //     >
    //         {children}
    //         <SvgIcon>
    //             <img src={arrowRight} />
    //         </SvgIcon>
    //     </Stack>
    // </Button>
    return <Button className="Next-Button" variant="contained" color="primary" sx={{bgcolor: "text.primary", borderRadius: "100px", ":hover": { background: "#000240", opacity: "0.8" }}}>
        {/*<img src={arrowRight} />*/}
        {/*<SvgIcon>*/}
        {/*    <img src={arrowRight} width="100%" height="100%"/>*/}
        {/*</SvgIcon>*/}
        {children ?
            <Stack direction="row" spacing={1} alignItems="center">
                {children}
                <img src={arrowRight} height="35%"/>
            </Stack> :
            <img src={arrowRight} height="35%"/>
        }
        {/*{children}*/}
        {/*<img src={arrowRight} height="35%"/>*/}
        {/*<Typography>Оформить</Typography>*/}
    </Button>
}

export default memo(NextButton);
