import React, {memo} from "react";
import {Button, Stack, Typography, useTheme} from "@mui/material";
import {ReactComponent as Smile} from "../assets/img/smile.svg";
import {ReactComponent as Icon} from "../assets/img/icon.svg";
import {ReactComponent as ArrowRight} from "../assets/img/arrowRight.svg";
import screen1 from '../assets/img/screen1.png';
import screen2 from '../assets/img/screen2.png';
import screen3 from '../assets/img/screen3.png';

const Content = () => {
    const theme = useTheme();

    return <Stack alignItems="flex-start" sx={{pt: 5, pl: 12, pb: 50}}>
        <Stack direction="row" alignItems="center" fontSize="40px" spacing={1}>
            <Smile
                height="1.5rem"
                width={"1.25rem"}
                fill={theme.palette.text.secondary}
                stroke={theme.palette.text.secondary}
            />
            <Typography variant="h2" lineHeight="100%" sx={{color: "text.secondary", fontSize: "inherit", pb: "3%"}}>частливые</Typography>
        </Stack>
        <Typography variant="h1" align="left" lineHeight="90%" sx={{color: "text.secondary", mt: 7}}>Люди. Сообщества.</Typography>
        <Typography variant="h1" align="left" lineHeight="90%" sx={{color: "text.secondary"}}>Территории</Typography>
        <Typography variant="h6" align="left" lineHeight="115%" width="23.4em" sx={{mt: 5, color: "white"}}>
            Мы сообщество деятельных людей. Мы ремесленники
            и предприниматели, дизайнеры и фермеры, художники
            и строители, рестораторы, программисты и многие другие. Вообще все те, кому не сидится на месте!
        </Typography>
        <Typography variant="h6" align="left" lineHeight="115%" width="23.4em" sx={{mt: 3, color: "white"}}>
            Мы живем и работаем на разных территориях и хотим, чтобы жизнь вокруг нас с каждом годом становилась лучше и интереснее и чтобы все больше счастливых людей появлялось в наших местах.
        </Typography>
        <Stack justifyContent="flex-start" direction="row" alignItems="flex-end" spacing={2} height="493px" sx={{mt: 4}}>
            <img src={screen1} width={215} height={465}/>
            <img src={screen2} width={215} height={485} style={{alignSelf: "flex-start", borderRadius: "31px"}}/>
            <img src={screen3} width={215} height={465}/>
        </Stack>
        <Typography variant="h4" sx={{color: "text.primary", mt: 10}}>Что вы получаете?</Typography>
        <Stack justifyContent="flex-start" spacing={2} sx={{width: "587px", mt: 4}}>
            {[
                {first: 'Предложите продукты', second: 'и услуги клиентам рядом'},
                {first: 'Участие в фестивалях', second: '#счастливых бесплатно'},
                {first: 'Получайте отзывы на', second: 'ваши продукты и услуги'},
                {first: 'Находите друзей', second: 'и знакомьтесь'},
                {first: 'Станьте неотъемлемой', second: 'частью #счастливых'},
            ].map(({first, second}, index) => (
                <Stack direction="row"
                       spacing={3}
                       alignItems="center"
                       alignSelf={index % 2 === 0 ? "flex-start" : "flex-end"}
                       sx={{bgcolor: "white", borderRadius: "22px", width: "367px", padding: "30px 33px 26px 30px"}}>
                       {/*sx={{bgcolor: "white", borderRadius: "22px", width: "367px", padding: "0 33px 0 30px"}}>*/}
                <Icon width={31} height={58} stroke={theme.palette.text.primary}/>
                    <Stack>
                        <Typography variant="h6" align="left" lineHeight="120%" sx={{color: "text.primary", fontSize: "22px"}}>{first}</Typography>
                        <Typography variant="h6" align="left" lineHeight="120%" sx={{color: "text.primary", fontSize: "22px"}}>{second}</Typography>
                    </Stack>
                </Stack>
            ))
            }
        </Stack>
        <Typography variant="h4" sx={{color: "text.secondary", mt: 15}}>Кто уже на платформе?</Typography>
        <Typography variant="h6" align="left" lineHeight="115%" width="18em" sx={{mt: 2, color: "white"}}>
            Самые интересные предприниматели и ремесленники, самые талантливые мастера и художники, самые красивые и запоминающиеся места, самые вкусные завтраки и обеды, самые полезные фермерские продукты и уютные гостевые дома.
        </Typography>
        <Typography variant="h6" align="left" lineHeight="115%" width="18em" sx={{mt: 3, color: "white"}}>
            У вас кафе или магазин, вы шьете одежду или программируете, варите сыр или ремонтируете машины, создаете мебель или обучаете детей. Нам нужны все!Мы приглашаем всех тех, кто делает что-то важное, нужное и полезное на своей территории!
        </Typography>
        <Button variant="contained" color="secondary" sx={{mt: 8,  bgcolor: "text.secondary", borderRadius: "100px"}}>
            <Stack direction="row" spacing={9} alignItems="center" sx={{p: "16px 31px 14px 24px" }}>
                <Typography variant="h6" sx={{color: "text.primary", fontSize: "18px", lineHeight: "20px", textTransform: "none"}}>Присоединиться</Typography>
                <ArrowRight width={19} height={21} fill={theme.palette.text.primary}/>
            </Stack>
        </Button>
        <Typography variant="h6" align="left" lineHeight="115%" width="15em" sx={{mt: 38, color: "white", opacity: 0.5}}>
            ИП Акимов Б.А.        hello@happies.ru
        </Typography>
    </Stack>;
}

export default memo(Content);
