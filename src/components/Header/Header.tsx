import { memo } from "react";
import {CSSTransition} from "react-transition-group";
import {ReactComponent as Smile} from "../../assets/img/smile.svg";
import {useAppSelector} from "../../hooks/redux";
import "./Header.css";
import {Step} from "../../store/reducers/stepSlice";

const Header = () => {
    const {current} = useAppSelector(state => state.step);

    return <CSSTransition timeout={500} in={current === Step.PHONE} appear classNames={{
        appearDone: "secondary",
        enterActive: "color-to-secondary",
        enterDone: "secondary",
        exitActive: "color-to-primary",
        exitDone: "primary"
    }}
    >
        <header className="header secondary">
            <Smile className="header__smile"/>
            <h2 className="header__text">
                частливые
            </h2>
        </header>
    </CSSTransition>;
};

export default memo(Header);
