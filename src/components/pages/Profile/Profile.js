import React from "react";
import imgProfile from '../../../assets/images/user-profile.png';
import styles from './Profile.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faAddressBook, faEnvelope, faCogs} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className={styles.Profile + ' ' + 'container'}>
            <div className={'card'}>

                <div className={'card card-header'}>
                    <div className={'card card-title'}>
                        <h1 className={'text-center'}>Profile</h1>
                    </div>
                    <img src={imgProfile} alt='profile image'/>
                    <div className={'card card-title'}>
                        <h3 className={'text-center'}>User name</h3>
                    </div>
                </div>

                <div className={'card card-body'}>
                    CEO & Founder, Example
                    <div className={'text-center'}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <FontAwesomeIcon icon={faAddressBook}/>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <FontAwesomeIcon icon={faCogs}/>
                    </div>
                </div>

                <div className={'card card-footer'}>
                    <button className={'btn btn-success'}>Edit profile</button>
                </div>

            </div>
        </div>
    )
};

export default Profile;