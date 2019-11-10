import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/OrgForm.module.css';
import { createStatus } from '../actions/actionStatus'
import { fetchAllOrgs } from '../actions/fetchOrgs';
import { connect } from 'react-redux';

class StatusForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: null,
            orgAssoc: null,
            error: null,
            redirect: false
        }
    }

    componentDidMount(){
        const { fetchAllOrgs }= this.props
        fetchAllOrgs(); 

    }

    renderUserList(oArr){
        if(oArr.data === null){
            return "...Loading"
        }
        else {
            return oArr.data.map((orgs) => {
                const {id, orgName} = orgs;
                return(
                    <option key={id}>{orgName}</option>
                )
            })
        }
    }

    handleSubmit = evn => {
        //stop Bswr default action
        evn.preventDefault();
        const { createStatus } = this.props
        const { name, orgAssoc } =this.state;
        createStatus({name, orgAssoc})
        this.setState({redirect: true})
    }

    handleInputChange = evn => {
        
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value 
        });
    }

    render() {
        const { name, orgAssoc, redirect} = this.state
        if(redirect){
            const {successful, error} = this.props.status
            if(successful)
            {
                console.log("Borat says Great Success ")
                return(
                    <div>
                        <p>The Status created successfully!</p>
                    <Button className={styles.successButton} href="/super" alt="Cancel">Org Page</Button>
                    </div>
                )
            }
            else if(error !== null){
                return(
                    <div>Error Submitting Status</div>
                )
            }
            else{
                return(
                    <div>Submitting......</div>
                )
            }
        }
        else{
            const orgArr = this.props.orgs
            return(
                <div>
                    <Form onSubmit={this.handleSubmit} className={styles.formBox}>
                        <Form.Row className={styles.formRow}>
                            <Form.Group  className={styles.formGroup}>
                                <Form.Label htmlFor="name">New Status</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Group className={styles.formGroup}>
                                <Form.Label>Organization</Form.Label>
                                <Form.Control as="select" name="orgAssoc" value={orgAssoc} onChange={this.handleInputChange}>
                                    <option>Choose...</option>
                                    {this.renderUserList(orgArr)}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className={styles.formRow}>
                            <Form.Group className={styles.formGroup}>
                                <Button className={styles.formButton} type="submit"><img src={require('../images/ApproveAction.png')} alt="Approve"/></Button>
                            </Form.Group>
                            <Form.Group className={styles.formGroup}>
                            <Button className={styles.formButton} href="/super"><img src={require('../images/CancelAction.png')} alt="Cancel"/></Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    const{
        orgs: oData,
        status: sData
    } = state
    return{orgs: oData, status: sData };
}

const mapDispatchToProps = { createStatus, fetchAllOrgs };

export default connect(mapStateToProps, mapDispatchToProps )(StatusForm);