import React from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from "react-transition-group";

import "./SideDrawer.css"


const SideDrawer = props => {
    const content =
        // <CSSTransition classNames="slide-in-left" in={props.show} timeout={200} mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={props.onclick}>{props.children}</aside>
        // </CSSTransition>;

    return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};


export default SideDrawer;
