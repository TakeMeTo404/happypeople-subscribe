import React, {memo} from "react";
import {Avatar, Button, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import CardBottomButton from "../../../buttons/CardBottomButton";
import DownLoadButton from "../../../buttons/DownLoadButton";
import boris from '../../../../assets/img/boris.png';
import CardContentWrapper from "../../CardContentWrapper";
import BackButton from "../../../buttons/BackButton";
import "./Success.css";
import useActions from "../../../../hooks/useActions";

type SuccessCardProps = {}

const Success = ({}: SuccessCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    const {goBack} = useActions();

    return <div className="card__content name">
        <div className="content__back-button-wrapper">
            <BackButton handleClick={goBack}/>
        </div>
        <img src={boris} alt="Ваш аватар" className="success__avatar"/>
        <h2 className="card__title success__title">
            Борис,<br/>
            Ваша подписка активна!
        </h2>
        <section className="success__download">
            <Button className="download-button">

            </Button>
            <Button className="download-button">
            </Button>
            {/*<Button>*/}
            {/*    <div className="download-button">*/}

            {/*    </div>*/}
            {/*</Button>*/}
            {/*<Button>*/}
            {/*    <div className="download-button">*/}

            {/*    </div>*/}
            {/*</Button>*/}
            {/*<div className="download-button">*/}
            {/**/}
            {/*</div>*/}
        </section>

{/*        <Stack spacing={2} alignItems="stretch" width="min(100%, 266px)" sx={{mt: 5}}>
            <DownLoadButton variant="ios"/>
            <DownLoadButton variant="android"/>
        </Stack>*/}
        <Stack justifyContent="flex-end" flexGrow={1}>
            <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{opacity: 0.5}}>
                {[
                    {text: "до 23 Мар", handleClick: () => console.log("до 23 марта")},
                    {text: "*342 Mastercard", handleClick: () => console.log("*342 Mastercard")},
                    {text: "Отменить?", handleClick: () => console.log("Отменить?")}
                ].map((props) =>
                    <Grid item key={props.text}>
                        <CardBottomButton {...props}/>
                    </Grid>
                )
                }
            </Grid>
        </Stack>
    </div>;
}

export default memo(Success);
