import React, { Component} from 'react';
import {Table, Button, Modal} from 'react-bootstrap';
import styles from '../styles/List.module.css';
import superStyles from '../styles/Super.module.css';
import {connect} from 'react-redux';
import {fetchTeamByID} from '../actions/fetchTeams';





class TeamList extends Component {
    componentDidMount(){
        const {fetchTeamByID} = this.props;
        const orgId = getQueryVar('orgId')
        fetchTeamByID(orgId);
    }
    state = {
        show: false,
        };

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };

      renderTableData(arr){
        if(arr.error !== null){
            return "There was an Error Connecting to the API. Error: " +  arr.error
        }
        if(arr.data === null)
        {
            return "....Loading"
        }
        else{
          return arr.data.map((team) => {
              const { id, teamName, orgId} = team;
              return(
                  <tr key={id} >
                      <td>{teamName}</td>
                      <td>0</td>
                      <td>0</td>
                      <td>
                          <Button id={id}className={superStyles.statusButton} href={'/users?teamId='+id+'&orgId='+orgId}>Update</Button>
                          <Button className={superStyles.orgButton} onClick={this.showModal}>Delete</Button>
                      </td>
                  </tr>
              )
          })
      }
  }

    render() {
        const teamArr = this.props.teams
        return(
            <div>
            <Table className={styles.table}>
                <thead className={styles.banner}>
                    <th>Team Name</th>
                    <th>Members In</th>
                    <th>Members Out</th>
                    <th>Select Action</th>
                </thead>
                <tbody className={styles.tableData}>
                    {this.renderTableData(teamArr)}
                </tbody>
            </Table>
            <Modal
            show={this.state.show} 
            handleClose={this.hideModal}
            size="lg"
            aria-labelledby="model"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="modal">
                Delete Team
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>You're about to delete this Team permanently!!</h4>
              <h4>Are you sure you want to do this?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button className={superStyles.locationButton} onClick={this.hideModal}>Cancel</Button>
              <Button className={superStyles.orgButton}>Delete</Button>
            </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

function getQueryVar(qVar)
{
       var params = window.location.search.substring(1);
       var  varSplit= params.split("&");
       for (var i=0;i<varSplit.length;i++) {
               var qPair = varSplit[i].split("=");
               if(qPair[0] === qVar){return qPair[1];}
       }
       return(false);
}

function mapStateToProps(state) {
    const {
      teams: data
    } = state;
    // turn the array of ids into an array of objects
    return { teams: data  };
  }
  
  // set the actions we need in this component
  const mapDispatchToProps = { fetchTeamByID };



export default connect(mapStateToProps,mapDispatchToProps)(TeamList);