import React from "react";
import styles from './Settings.module.css';

const Settings = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-4 col-sm-4 col-xs-12'}>
                </div>
                <div className={styles.Settings + ' ' + 'col-md-4 col-sm-4 col-xs-12'}>
                    <div className={'card card-body'}>
                        <h1 className={'text-center'}>Settings</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Settings;