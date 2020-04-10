import React from "react";
import styles from './Logo.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFlag} from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
    return <div className={styles.LogoContainer}><FontAwesomeIcon icon={faFlag}/></div>
};

export default Logo;
