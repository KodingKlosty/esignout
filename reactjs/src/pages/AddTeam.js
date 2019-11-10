import React, { Component } from 'react';
import TeamForm from '../component/TeamForm';
import superStyles from '../styles/Super.module.css';
import styles from '../styles/SuOrg.module.css';



class createTeam extends Component {
    render() {
        return(
            <div>
                <h1 className={superStyles.suTitle}> SuperUser </h1>
                <h2 className={styles.newOrgTitle}>New Team</h2>
                <TeamForm />
            </div>
        )
    }
}

export default createTeam;