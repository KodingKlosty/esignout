import React, { Component } from 'react';
import LocForm from '../component/LocForm';
import superStyles from '../styles/Super.module.css';
import styles from '../styles/SuOrg.module.css';



class createLoc extends Component {
    render() {
        return(
            <div>
                <h1 className={superStyles.suTitle}> SuperUser </h1>
                <h2 className={styles.newOrgTitle}>New Location</h2>
                <LocForm />
            </div>
        )
    }
}

export default createLoc;