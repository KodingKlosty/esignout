import React, { Component } from 'react';
import EmpCount from '../component/EmpCount';
import styles from '../styles/Company.module.css';
import List from '../component/List';


class Landing extends Component {
    render() {
        return(
            <div>
                <h1 className={styles.comName}> Company Name </h1>
                <EmpCount />
                <List />
            </div>
        )
    }
}

export default Landing;