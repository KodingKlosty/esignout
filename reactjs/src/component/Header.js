import React, { Component } from 'react';
import styles from '../styles/Header.module.css';


class Header extends Component {
    render() {
        return(
            <div className={styles.headerUser}>
                    <img src={require('../images/eSignout.png')} alt="eSignout Logo" href="#Home"/>
            </div>
        )
    }
}

export default Header;