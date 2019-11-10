import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import styles from '../styles/Super.module.css';
import TeamList from '../component/TeamList';


class Team extends Component {
    render() {
        return(
            <div>
                <h1 className={styles.suTitle}> SuperUser </h1>
                <div className={styles.createDiv}>
                    <div className={styles.createTxt}>Create:
                        <div><Button className={styles.orgButton} href="/createOrg">Orginization</Button></div>
                        <div><Button className={styles.teamButton} href="/createTeam">Teams</Button></div>
                        <div><Button className={styles.userButton} href="/createUser">Users</Button></div>
                        <div><Button className={styles.locationButton} href="/createLoc">Locations</Button></div>
                        <div><Button className={styles.statusButton} href="/createStatus">Status</Button></div>
                    </div>
                </div>
                <TeamList />
            </div>
        )
    }
}

export default Team;