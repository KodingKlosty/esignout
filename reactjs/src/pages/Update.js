import React, { Component } from 'react';
import UserUpdate from '../component/UserUpdate';
import superStyles from '../styles/Super.module.css';
import styles from '../styles/SuOrg.module.css';



class Update extends Component {
    render() {
        return(
            <div>
                <h1 className={superStyles.suTitle}> SuperUser </h1>
                <h2 className={styles.newOrgTitle}>Status Update</h2>
                <UserUpdate />
            </div>
        )
    }
}

export default Update;