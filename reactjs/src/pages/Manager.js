import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import styles from '../styles/Super.module.css';
import TeamList from '../component/TeamList';


class Manager extends Component {
    render() {
        return(
            <div>
                <h1 className={styles.suTitle}> Company Name </h1>
                <div className={styles.createDiv}>
                    <div className={styles.createTxt}>Create:
                        <div><Button className={styles.teamButton} href="/createTeam">Teams</Button></div>
                        <div><Button className={styles.userButton} href="/createUser">Users</Button></div>
                    </div>
                </div>
                <TeamList />
            </div>
        )
    }
}

export default Manager;