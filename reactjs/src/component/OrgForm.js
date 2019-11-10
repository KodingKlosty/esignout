import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/OrgForm.module.css';
import {createOrg, fetchAllOrgs} from '../actions/fetchOrgs';
import {fetchUsersByLevel} from '../actions/fetchUsers';
import { connect } from 'react-redux';

// Need to add Auth flag to Actions and contorllers

class OrgForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            orgName: null,
            superUser: null,
            error: null,
            redirect: false
        };
    }

    componentDidMount(){
        const {fetchUsersByLevel} = this.props;
        const levelToGet = 3
        fetchUsersByLevel(levelToGet);
    }

    handleSubmit = evn => {
        //stop Bswr default action
        evn.preventDefault();
        const { createOrg } = this.props
        const { orgName, superUser } = this.state; 
        if (orgName !== null && superUser !== null){       
            createOrg({ orgName, superUser });
            this.setState({redirect: true})
        }
        else if(orgName === null || orgName === ''){
            console.log("error: No orgName")
        }
        else if(superUser === null || superUser === ''){
            console.log("error: No superUser")
        }
        else{
            console.log("An unknown error has occured")
        }

    };

    handleInputChange = evn => {
        
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value 
        });
    }

    renderSupersList(su){
        if(su.data === null){
           return  "...Loading"
        }
        else {
            return su.data.map((sUser) => {
                const { id, name} = sUser;
                return(
                    <option key={id}>{name}</option>
                )
            })
        }
    }

    render() {
        const {orgName , superUser} = this.state
        if(this.state.redirect){
            const {successful, error} = this.props.orgs
            if(successful)
            {
                console.log("GREAT SUCCESS - BORAT")
                return(
                    <div>
                         <p>The Org created successfully!</p>
                        <Button className={styles.successButton} href="/super" alt="Cancel">Orgs Page</Button>
                    </div>
                )
            }
            else if(error !== null )
            {
                return(
                    <div>Error Submitting Org </div>
                )
            }
            else
            {
                return(
                    <div>Submitting.....</div>
                )
            }
            
        }
        else{
            const suArr = this.props.users
            return(
                <div>
                    <Form onSubmit={this.handleSubmit} className={styles.formBox}>
                        <Form.Row className={styles.formRow}>
                            <Form.Group  className={styles.formGroup} controlId="orgName">
                            <label htmlFor="orgName">Organization Name</label>
                                <Form.Control type="text" name="orgName"  value={orgName} onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Group className={styles.formGroup} controlId="orgSU">
                                <Form.Label>Organization SuperUser</Form.Label>
                                <Form.Control as="select" name="superUser"  value={superUser} onChange={this.handleInputChange}>
                                    <option>Choose...</option>
                                    {this.renderSupersList(suArr)}
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

function mapStateToProps(state) {
    const {
        users: data,
        orgs: oData
    } = state
    return{ users: data, orgs: oData };
}


const mapDispatchToProps = {  fetchAllOrgs, createOrg, fetchUsersByLevel };

export default connect (mapStateToProps, mapDispatchToProps)(OrgForm);