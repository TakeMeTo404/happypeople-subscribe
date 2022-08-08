import {memo} from "react";
import "./Loader.css";
import {CSSTransition} from "react-transition-group";

interface LoaderProps {
    visible: boolean;
}

const Loader = ({visible}: LoaderProps) => {
    return <CSSTransition in={visible} timeout={{enter: 300, exit: 150}} appear mountOnEnter unmountOnExit classNames={{
        appearActive: "loader-bg_darkening",
        appearDone: "loader-bg_dark",
        enterActive: "loader-bg_darkening",
        enterDone: "loader-bg_dark",
        exitActive: "loader-bg_lightening",
        exitDone: "loader-bg_light"
    }}>
        <div className="loader-wrapper">
            <CSSTransition in={visible} timeout={{enter: 300, exit: 150}} appear classNames={{
                appearActive: "loader-holder_appearing",
                appearDone: "loader-holder_shown",
                exitActive: "loader-holder_hiding",
                exitDone: "loader-holder_hidden"
            }}>
                <div className="loader-holder">
                    <div className="loader"/>
                </div>
            </CSSTransition>
        </div>
    </CSSTransition>;
};

export default memo(Loader);
