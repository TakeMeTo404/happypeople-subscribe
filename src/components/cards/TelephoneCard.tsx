import React, {memo} from "react";
import {Avatar, Button, Divider, Grid, Link, Stack, TextField, Typography} from "@mui/material";
import StepCard from "../StepCard";
import CardBottomButton from "../buttons/CardBottomButton";
import DownLoadButton from "../buttons/DownLoadButton";
import {useIsMobile} from "../../hooks/useIsMobile";
import photo1 from '../../assets/img/photo-1.png';
import photo2 from '../../assets/img/photo-2.png';
import photo3 from '../../assets/img/photo-3.png';
import photo4 from '../../assets/img/photo-4.png';
import photo5 from '../../assets/img/photo-5.png';
import checked from '../../assets/img/checked.svg';
import NextButton from "../buttons/NextButton";


type TelephoneCardProps = {}

const Photo = ({}) => {

}

const FivePhotos = memo(() => {
    return <Stack direction="row"
                  justifyContent="center"
                  alignItems="center"
                  width="min(100%, 460px)"
                  sx={{
                      gap: "5.14%",
                      height: "127px"
                  }}
    >
        <div style={{width: "18.97%", height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
            <img src={photo1} height="86.6%" style={{aspectRatio: "1", zIndex: 1}}/>
        </div>
        <div style={{width: "13.82%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
            <img src={photo2} height="86.6%" style={{aspectRatio: "1", zIndex: 2}}/>
        </div>
        <div style={{width: "13.82%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
            <img src={photo3} height="86.6%" style={{aspectRatio: "1", zIndex: 3}}/>
        </div>
        <div style={{width: "13.82%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
            <img src={photo4} height="86.6%" style={{aspectRatio: "1", zIndex: 4}}/>
        </div>
        <div style={{width: "18.97%", height: "100%", display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <img src={photo5} height="86.6%" style={{aspectRatio: "1", zIndex: 2}}/>
        </div>
    </Stack>
})

const TelephoneCard = ({}: TelephoneCardProps) => {
    const isMobile = useIsMobile();

    return <StepCard>
        <Stack alignItems="center"
               justifyContent="flex-start"
               width="min(460px, 100%)"
               paddingTop="11px"
               flexGrow={1}
               sx={{
                   height: "100%"
               }}
        >
            <FivePhotos/>
            <Stack spacing={6} sx={{mt: "25%"}}>
                <Stack spacing={3}>
                    <Typography variant="h4" lineHeight="70%" sx={{color: 'text.primary'}}>
                        Присоединяйтесь,
                    </Typography>
                    <Typography variant="h4" lineHeight="70%" sx={{color: 'text.primary'}}>
                        и расскажите о себе!
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} justifyContent="center">
                    <Stack direction="row"
                           spacing={1}
                           alignItems="baseline"
                           justifyContent="stretch"
                           sx={{
                               borderRadius: "100px",
                               border: "1px solid #979797"
                           }}
                    >
                        <Typography variant="h6" fontSize="21px" sx={{pl: 2, pr: 2, pt: 1, pb: 1, borderRight: "1px solid #979797"}}>+7</Typography>
                        <TextField variant="standard" size="small" placeholder="999 999 99 99"
                                   sx={{
                                       borderColor: "transparent",
                                       pl: 1,
                                       pr: 1,
                                       maxWidth: "10em"
                                   }}
                                   InputLabelProps={{
                                       style: {fontSize: "21px"}
                                   }}
                                   InputProps={{
                                       disableUnderline: true,
                                       style: {fontSize: "21px"}
                                   }}
                        />
                    </Stack>
                    <NextButton handleClick={() => console.log("телефон введен")}/>
                </Stack>
            </Stack>
            <Stack flexGrow={1}/>
            <Stack direction="row" alignItems="center" spacing={2}>
                <img src={checked} height="60%"/>
                <Stack spacing={0}>
                    <Typography variant="subtitle1" align="left" lineHeight="100%" letterSpacing="0.02em" fontWeight={400}>Регистрируясь, вы соглашаетесь</Typography>
                    <Link href="#" variant="subtitle1" align="left" lineHeight="100%" letterSpacing="0.02em" sx={{":hover": {cursor: "pointer"}}} color="inherit">с правилами использования приложения</Link>
                </Stack>
            </Stack>
        </Stack>
    </StepCard>;
}

export default memo(TelephoneCard);
