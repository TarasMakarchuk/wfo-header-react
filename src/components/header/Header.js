import React, {Component} from "react";
import styles from './Header.module.css';
import Dropdown from "./Dropdown/Dropdown";
import Logo from "./Logo/Logo";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Profile from "../pages/Profile/Profile";
import Messages from "../pages/Messages/Messages";
import Settings from "../pages/Settings/Settings";
import About from "../pages/About/About";
import Greeting from "./Greeting/Greeting";
import Page404 from "../pages/404/Page404";

class Header extends Component {

    LoginWrapper = () => {
        return <Login
            changeIsAuth={this.props.changeIsAuth}
            isAuth={this.props.isAuth}
            setLogin={this.props.setLogin}
            setPassword={this.props.setPassword}
            authUserData={this.props.authUserData}
        />
    };

    render() {
        return (
            <div>
                <div className={styles.Header}>
                    <Logo/>
                    <Greeting
                        userName={this.props.authUserData.login}
                        isAuth={this.props.isAuth}
                    />
                    <Dropdown
                        isAuth={this.props.isAuth}
                        changeIsAuth={this.props.changeIsAuth}
                        clearAuthData={this.props.clearAuthData}
                    />
                </div>

                <div>
                    <Switch>
                        <Route exact path='/wfo-header-react' render={() => <Redirect to={'/home'}/>}/>
                        <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
                        <Route path='/login' component={this.LoginWrapper}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/messages' component={Messages}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/about' component={About}/>
                        <Route path='*' render={() => <div><Page404/></div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Header;