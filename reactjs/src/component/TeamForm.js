import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/OrgForm.module.css';
import { connect } from 'react-redux';
import { fetchUsersByOrgID} from '../actions/fetchUsers'
import { createTeam } from '../actions/fetchTeams'




class TeamForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: null,
            mgrName: null,
            teamMbrs: [],
            redirect: false
        }
    }

    componentDidMount(){
        const { fetchUsersByOrgID }= this.props
        fetchUsersByOrgID(1) // this will be changed at a later time

    }

    handleSubmit = evn => {
        //stop Bswr default action
        evn.preventDefault();

    }

    handleInputChange = evn => {
        
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value 
        });
    }

    renderUserList(uArr){
        if(uArr.data === null){
            return ".....Loading"
        }
        else{
            return uArr.data.map((user) => {
                const {id, name} = user
                return(
                    <option key={id}>{name}</option>
                )
            })
        }
    }

    renderMgrList(uArr){
        if(uArr.data === null){
            return "....Loading"
        }
        else{
            uArr.data.map((user) => {
                const {id, level, name} = user
                if({level} >= 2){
                   return <option key={id}>{name}</option>
                }
                else{
                    return 
                }
            })
        }
    }

    render() {
        const { name, mgrName, teamMbrs, redirect} = this.state
        console.log(teamMbrs)
        if(redirect){
            const {successful, error} = this.props.users
            if(successful)
            {
                console.log("Borat says Great Success ")
                return(
                    <div>
                        <p>The Team created successfully!</p>
                    <Button className={styles.successButton} href="/super" alt="Cancel">Org Page</Button>
                    </div>
                )
            }
            else if(error !== null){
                return(
                    <div>Error Submitting Location</div>
                )
            }
            else{
                return(
                    <div>Submitting......</div>
                )
            }
        }
        else{
            const userArr = this.props.users
            return(
                <div>
                    <Form onSubmit={this.handleSubmit} className={styles.formBox}>
                        <Form.Row className={styles.formRow}>
                            <Form.Group  className={styles.formGroup} controlId="TeamName">
                                <Form.Label>Team Name</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group className={styles.formGroup} controlId="teamMgr">
                                <Form.Label>Team Manager</Form.Label>
                                <Form.Control as="select" name="mgrName" value={mgrName} onChange={this.handleChange}>
                                    <option>Choose...</option>
                                    {this.renderMgrList(userArr)}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className={styles.formRow}>
                        <Form.Group className={styles.formGroup} controlId="teamMbr">
                            <Form.Label>Select Team Members</Form.Label>
                            <Form.Control as="select" name="teamMbrs" value={teamMbrs} onChange={this.handleChange} multiple >
                                {this.renderUserList(userArr)}
                            </Form.Control>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row className={styles.formRow}>
                            <Form.Group className={styles.formGroup}>
                                <Button className={styles.formButton} type="submit"><img src={require('../images/ApproveAction.png')} alt="Approve"/></Button>
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
}

function mapStateToProps(state){
    const{
        teams: tData,
        users: uData
    } = state
    return{ teams: tData, users: uData };
}

const mapDispatchToProps = { createTeam, fetchUsersByOrgID };

export default connect(mapStateToProps, mapDispatchToProps )(TeamForm);