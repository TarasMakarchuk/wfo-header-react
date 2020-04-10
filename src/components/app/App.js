import React, {Component} from 'react';
import styles from './App.module.css';
import Header from "../header/Header";

class App extends Component {

    state = {
        isAuth: false,
        authUserData: {
            login: '',
            password: ''
        }
    };

    changeIsAuth = () => {
        this.setState({
            ...this.state,
            isAuth: !this.state.isAuth,
        });
    };

    clearAuthData = () => {
        this.setState({
            isAuth: false,
            authUserData: {
                login: '',
                password: ''
            }
        });
    };

    setLogin = login => {
        let password = this.state.authUserData.password;
        this.setState({
            ...this.state,
            authUserData: {
                login,
                password
            }
        });
    };

    setPassword = password => {
        let login = this.state.authUserData.login;
        this.setState({
            ...this.state,
            authUserData: {
                login,
                password
            }
        });
    };

    render() {
        return (
            <div className={styles.App}>
                <Header
                    changeIsAuth={this.changeIsAuth}
                    isAuth={this.state.isAuth}
                    setLogin={this.setLogin}
                    setPassword={this.setPassword}
                    authUserData={this.state.authUserData}
                    clearAuthData={this.clearAuthData}
                />
            </div>
        );
    }
}

export default App;
