import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/OrgForm.module.css';



class UserUpdate extends Component {
    render() {
        return(
            <div>
                <Form className={styles.formBox}>
                    <Form.Row className={styles.formRow}>
                    <Form.Group className={styles.formGroup} controlId="orgSU">
                            <Form.Label>Location</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className={styles.formGroup} controlId="orgSU">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className={styles.formRow}>
                        <Form.Group className={styles.formGroup}>
                            <Button className={styles.formButton} href="/super"><img src={require('../images/ApproveAction.png')} alt="Approve"/></Button>
                        </Form.Group>
                        <Form.Group className={styles.formGroup}>
                        <Button className={styles.formButton} href="/super"><img src={require('../images/CancelAction.png')} alt="Approve"/></Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default UserUpdate;