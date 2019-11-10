import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/OrgForm.module.css';
import { connect } from 'react-redux';
import { fetchAllLevels } from '../actions/actionSecLvl';
import { fetchLocationsByID } from '../actions/actionLocations';
import { fetchTeamByID } from '../actions/fetchTeams';
import { createUser } from '../actions/fetchUsers'


class TeamForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: null,
            secLevel: null,
            username: null,
            location: null,
            team: null,
            redirect: false,
        };
    }

    componentDidMount(){
        const {fetchAllLevels, fetchLocationsByID, fetchTeamByID} = this.props
        fetchAllLevels();
        fetchLocationsByID(1);
        fetchTeamByID(1);
    }

    handleSubmit = evn => {
        evn.preventDefault();
        const { createUser } = this.props
        const {name, secLevel, username, location, team} = this.state
        createUser({ name, secLevel, username, location, team })
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

    renderLevelsList(lvl){
        if(lvl.data === null){
        return  "...Loading"
        }
        else {
            return lvl.data.map((seclvls) =>{
                const {id, lvl } = seclvls;
                return(<option key = {id}>{lvl}</option>)
            })
        }
    }

    renderTeamsList(tms){
        if(tms.data === null){
            return "...Loading"
        }
        else {
            return tms.data.map((tms) =>{
                const {id, teamName } = tms;
                return(<option key = {id}>{teamName}</option>)
            })
        }
    }

    renderLocationList(loc){
        if(loc.data === null){
            return "...Loading"
        }
        else {
            return loc.data.map((loc) =>{
                const {id, location } = loc;
                return(<option key = {id}>{location}</option>)
            })
        }
    }

    render() {
        //render data
        const {name, secLevel, username, location, team, redirect} = this.state
        if(redirect){
            const {successful, error} = this.props.users
            if(successful)
            {
                console.log("GREAT SUCCESS = BORAT")
                return(
                    <div>
                    <p>User Created!</p>
                    <Button className={styles.successButton} href="/super" alt="Cancel">Orgs Page</Button>
                    </div>
                )
            }
            else if(error !== null)
            {
                return(
                    <div>Error Submitting User</div>
                )
            }
            else{
                return(
                    <div>Submitting.....</div>
                )
            }
        }
        else{
            const lvl = this.props.levels
            const loc = this.props.locations
            const tms = this.props.teams
            if(lvl.pending === false && loc.pending === false && tms.pending === false  ){
                return(
                    <div>
                    <Form onSubmit={this.handleSubmit} className={styles.formBox}>
                        <Form.Row className={styles.formRow}>
                            <Form.Group  className={styles.formGroup} controlId="TeamName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group className={styles.formGroup} controlId="teamMgr">
                                <Form.Label>Security</Form.Label>
                                <Form.Control as="select" name="secLevel" value={secLevel} onChange={this.handleInputChange}>
                                    <option>Choose...</option>
                                    {this.renderLevelsList(lvl)} 
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className={styles.formRow}>
                        <Form.Group className={styles.formGroup} controlId="teamMbr">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" name="username" value={username} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group className={styles.formGroup} controlId="teamMbr">
                            <Form.Label>Assigned Location</Form.Label>
                                <Form.Control as="select" name="location" value={location} onChange={this.handleInputChange}>
                                    <option>Choose...</option>
                                    {this.renderLocationList(loc)} 
                                </Form.Control>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row className={styles.formRow}>
                        <Form.Group className={styles.formGroup} controlId="teamMbr">
                            <Form.Label>Assigned Team</Form.Label>
                                <Form.Control as="select" name="team" value={team} onChange={this.handleInputChange}>
                                    <option>Choose...</option>
                                    {this.renderTeamsList(tms)} 
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
            else{
                return "...Loading"

            }

        }
    }
    
        }

function mapStateToProps(state) {
    const {
        locations: lData,
        teams: tData,
        level: secData,
        users: uData
    } = state
    return{ locations: lData, teams: tData, levels: secData, users: uData};
}


const mapDispatchToProps = { fetchAllLevels, createUser, fetchLocationsByID, fetchTeamByID };

export default connect(mapStateToProps, mapDispatchToProps) (TeamForm);