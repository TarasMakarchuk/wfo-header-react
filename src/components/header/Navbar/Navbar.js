import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKey, faHome, faUser, faEnvelope, faCogs, faInfo} from '@fortawesome/free-solid-svg-icons';
import Logout from "../../pages/Logout/Logout";


const Navbar = props => {

    const loginLogoutToggle = !props.isAuth ? <>Login <FontAwesomeIcon icon={faKey}/></> :
        <Logout changeIsAuth={props.changeIsAuth} clearAuthData={props.clearAuthData}/>;

    return (
        <div className={styles.NavbarWrapper}>
            <nav className={styles.Navbar}>
                <div>
                    <NavLink to={'/login'} className={styles.MenuItem}>
                        {loginLogoutToggle}
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/home'} className={styles.MenuItem}>Home <FontAwesomeIcon icon={faHome}/></NavLink>
                </div>
                <div>
                    <NavLink to={'/profile'} className={styles.MenuItem}>Profile <FontAwesomeIcon
                        icon={faUser}/></NavLink>
                </div>
                <div>
                    <NavLink to={'/messages'} className={styles.MenuItem}>Messages <FontAwesomeIcon icon={faEnvelope}/></NavLink>
                </div>
                <div>
                    <NavLink to={'/settings'} className={styles.MenuItem}>Settings <FontAwesomeIcon icon={faCogs}/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/about'} className={styles.MenuItem}>About <FontAwesomeIcon icon={faInfo}/></NavLink>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;