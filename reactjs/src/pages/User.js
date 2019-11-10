import React, { Component } from 'react';
import styles from '../styles/Super.module.css';
import UserList from '../component/UserList';


class Users extends Component {
    render() {
        return(
            <div>
                <h1 className={styles.suTitle}> Company Name </h1>
                <div className={styles.createDiv}>
                    <UserList />
                </div>
            </div>
        )
    }
}

export default Users;