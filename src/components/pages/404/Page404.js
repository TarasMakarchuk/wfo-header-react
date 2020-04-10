import React from "react";
import styles from './Page404.module.css';

const Page404 = () => {
    return (
        <div className={'container'}>
            <h1 className={styles.Page404 + ' ' + 'text-center'}>
                Error: 404, page not found, something went wrong
            </h1>
        </div>
    )
};


export default Page404;