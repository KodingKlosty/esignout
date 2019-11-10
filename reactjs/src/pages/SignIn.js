import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/SignIn.module.css';


class SignIn extends Component {

    render() {
        return(
            <div>
                <h1 className={styles.comName}> Company Name </h1>
                <Form className={styles.form}>
                    <Form.Group  controlId="LoginForm">
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="LoginForm">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button  className={styles.button} type="submit" href="/super">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SignIn;
