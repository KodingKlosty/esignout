import React, { Component } from 'react';
import OrgForm from '../component/OrgForm';
import superStyles from '../styles/Super.module.css';
import styles from '../styles/SuOrg.module.css';



class createOrg extends Component {
    render() {
        return(
            <div>
                <h1 className={superStyles.suTitle}> SuperUser </h1>
                <h2 className={styles.newOrgTitle}>New Organization</h2>
                <OrgForm/>
            </div>
        )
    }
}

export default createOrg;