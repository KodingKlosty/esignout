import React, { Component } from 'react';
import StatusForm from '../component/StatusForm';
import superStyles from '../styles/Super.module.css';
import styles from '../styles/SuOrg.module.css';



class createStatus extends Component {
    render() {
        return(
            <div>
                <h1 className={superStyles.suTitle}> SuperUser </h1>
                <h2 className={styles.newOrgTitle}>New Status</h2>
                <StatusForm />
            </div>
        )
    }
}

export default createStatus;