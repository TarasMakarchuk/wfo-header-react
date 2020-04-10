import React from "react";
import styles from './Greeting.module.css';

const Greeting = props => {
    return props.isAuth && <h2 className={styles.Greeting}>Hi, {props.userName}</h2>
};

export default Greeting;