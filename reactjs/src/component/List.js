import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import styles from '../styles/List.module.css';


class List extends Component {
    render() {
        return(
            <Table className={styles.table}>
                <thead className={styles.banner}>
                    <th>Team Name</th>
                    <th>Employees In</th>
                    <th>Employees Total</th>
                </thead>
                <tbody className={styles.tableData}>
                    <tr>
                        <td>Apps Team</td>
                        <td>56</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td>Infrastructure Team</td>
                        <td>25</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Management Team</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default List;
