import React from "react";
import styles from './Messages.module.css';

const Messages = () => {
    return (

        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-6 col-sm-6 col-xs-12'}>
                    </div>
                    <div className={styles.MessagesForm + ' ' + 'col-md-7 col-sm-7 col-xs-12'}>
                        <div className={'card card-body'}>
                            <h1 className={'text-center'}>Messages</h1>
                        </div>
                        <div className={'row'}>
                            <div className={styles.MessagesForm + ' ' + 'col-lg-11 col-md-11 col-sm-12 '}>
                                <div className={'form-group'}>
                                    <textarea className={'form-control form-control-lg'}/>
                                </div>
                                <input type='submit' className='btn btn-secondary btn-block' value='send'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Messages;