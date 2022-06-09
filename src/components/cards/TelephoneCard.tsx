import React, {memo} from "react";
import {Avatar, Button, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import StepCard from "../StepCard";
import CardBottomButton from "../buttons/CardBottomButton";
import DownLoadButton from "../buttons/DownLoadButton";
import {useIsMobile} from "../../hooks/useIsMobile";
import photo1 from '../../assets/img/photo-1.png';
import photo2 from '../../assets/img/photo-2.png';
import photo3 from '../../assets/img/photo-3.png';
import photo4 from '../../assets/img/photo-4.png';
import photo5 from '../../assets/img/photo-5.png';
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
            <Stack spacing={4} sx={{mt: "25%"}}>
                <Stack spacing={3}>
                    <Typography variant="h4" lineHeight="70%" sx={{color: 'text.primary'}}>
                        Присоединяйтесь,
                    </Typography>
                    <Typography variant="h4" lineHeight="70%" sx={{color: 'text.primary'}}>
                        и расскажите о себе!
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} justifyContent="center">
                    <Stack direction="row" spacing={1} border={1}>
                        <Typography variant="h6">+7</Typography>
                        <Divider orientation="vertical"/>
                        <Typography variant="h6">906 637 88 82</Typography>

                        {/*<TextField placeholder="телефон"/>*/}
                    </Stack>
                    <NextButton handleClick={() => console.log("телефон введен")}/>
                </Stack>
            </Stack>
            <Stack flexGrow={1}/>
            <Button>press me</Button>
        </Stack>
    </StepCard>;
}

export default memo(TelephoneCard);
