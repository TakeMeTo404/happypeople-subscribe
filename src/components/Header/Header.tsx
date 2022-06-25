import {memo, useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {ReactComponent as Smile} from "../../assets/img/smile.svg";
import "./Header.css";

const Header = () => {
    const [state, setState] = useState<0 | 1>(0);

    useEffect(() => {
        setTimeout(() => setState(1), 3000)
        setTimeout(() => setState(0), 6000)
    }, [])

    return <CSSTransition timeout={500} in={state === 0} appear classNames={{
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
