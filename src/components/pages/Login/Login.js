import React from "react";
import styles from './Login.module.css';

const Login = props => {

    const submitFormHandler = event => {
        event.preventDefault();
        if (event.target.value === 'login') {
            props.changeIsAuth();
        }
    };

    const handleChangeLogin = (event) => {
        props.setLogin(event.target.value)
    };

    const handleChangePassword = (event) => {
        props.setPassword(event.target.value)
    };

    return (
        <>
            {!props.isAuth
                ? <div className={styles.LoginContainer + ' ' + 'container'}>
                    <div className={'card card-title'}>
                        <h1 className={'text-center'}>Login form</h1>
                    </div>
                    <form onClick={submitFormHandler}>
                        <div className={'card card-body'}>
                            <label>login</label>
                            <input type="text" placeholder={'enter login'} onChange={handleChangeLogin}
                                   value={props.login}/>
                            <label>password</label>
                            <input type="password" placeholder={'enter password'} onChange={handleChangePassword}
                                   value={props.password}/>
                        </div>
                        <div className={'card card-footer'}>
                            <input type="button" value='login' className={'btn btn-success'}/>
                        </div>
                    </form>
                </div>

                : <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-4 col-sm-4 col-xs-12'}>
                        </div>
                        <div className={styles.Authorized + ' ' + 'col-md-4 col-sm-4 col-xs-12'}>
                            <div className={'card card-body'}>
                                <h1 className={'text-center'}>Authorized!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Login;