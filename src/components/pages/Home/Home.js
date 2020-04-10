import React from "react";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-4 col-sm-4 col-xs-12'}>
                </div>
                <div className={styles.Home + ' ' + 'col-md-4 col-sm-4 col-xs-12'}>
                    <div className={'card card-body'}>
                        <h1 className={'text-center'}>Home page</h1>
                        <span className={'text-center'}>
                            used bootstrap, fontawesome,
                            routing, redirect to homepage,
                            page 404, responsive design
                        </span>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Home;