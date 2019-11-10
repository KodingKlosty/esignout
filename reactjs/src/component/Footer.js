import React, { Component } from 'react';
import styles from '../styles/Footer.module.css'


class Footer extends Component {
    render() {
        return(
            <div className={styles.footerUser}>
                <img className={styles.JKWDLogo} src={require('../images/jkwdlogonew.png')} alt="Web Designer Logo" /> 
            </div>
        )
    }
}

export default Footer;