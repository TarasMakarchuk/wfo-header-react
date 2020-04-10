import React, {Component} from "react";
import styles from './Dropdown.module.css';
import './Dropdown.css';
import Navbar from "../Navbar/Navbar";

class Dropdown extends Component {

    state = {
        isOpenMenu: false,
        openMenuClass: 'opened',
        closeMenuClass: 'nav-toggle'
    };

    menuClickHandler = () => {
        this.setState({
            ...this.state,
            isOpenMenu: !this.state.isOpenMenu
        });
    };

    render() {

        const currentStyleDropdown = this.state.isOpenMenu ? this.state.openMenuClass : this.state.closeMenuClass;

        return (
            <div>
                <div className={styles.BurgerMenu}>
                    <nav>
                        <button className={currentStyleDropdown} onClick={this.menuClickHandler}>
                            <span className="bar-top"> </span>
                            <span className="bar-mid"> </span>
                            <span className="bar-bot"> </span>
                        </button>
                    </nav>
                </div>
                <div>
                    {this.state.isOpenMenu
                    && <Navbar
                        isAuth={this.props.isAuth}
                        changeIsAuth={this.props.changeIsAuth}
                        clearAuthData={this.props.clearAuthData}
                    />}
                </div>
            </div>
        )
    }
}

export default Dropdown;
