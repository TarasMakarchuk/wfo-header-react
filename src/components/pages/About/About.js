import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-4 col-sm-4 col-xs-12'}>
                </div>
                <div className={styles.About + ' ' + 'col-md-4 col-sm-4 col-xs-12'}>
                    <div className={'card card-body'}>
                        <h1 className={'text-center'}>About</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default About;