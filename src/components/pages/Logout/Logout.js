import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

const Logout = props => {

    const logout = () => {
        props.changeIsAuth();
        props.clearAuthData();
    };

    return <span onClick={logout}>Logout <FontAwesomeIcon icon={faSignOutAlt}/></span>

};

export default Logout;