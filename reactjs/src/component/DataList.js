import React, { Component} from 'react';
import {Table, Button, Modal} from 'react-bootstrap';
import styles from '../styles/List.module.css';
import superStyles from '../styles/Super.module.css';
import { connect } from 'react-redux';
import { fetchAllOrgs, deleteOrg } from '../actions/fetchOrgs'



class DataList extends Component {
    componentDidMount(){
        const {fetchAllOrgs} = this.props;
        fetchAllOrgs();
    }

    state = {show: false};

    showModal = (id) => {
        this.setState({ 
          show: true,
          id: id
        });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      handleDelete = (evn) =>{
        evn.preventDefault();
        const evnTarId = evn.target.id
        const {deleteOrg} = this.props
        console.log(this.props)
        console.log("deleting: " , evnTarId)
        deleteOrg(evnTarId);
        this.hideModal();
        


      }

      renderTableData(arr){
          if(arr.error !== null){
              return "There was an Error Connecting to the API. " +  arr.error
          }
          if(arr.data === "" || arr.data === undefined){
            return this.componentDidMount()
          }
           if(arr.data === null)
          {
              return "....Loading"
          }
          else{
            return arr.data.map((org) => {
                const { id, orgName } = org; //locations, teams
                return(
                    <tr key={id} >
                        <td>{orgName}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <Button id={id} className={superStyles.statusButton} href={`/team?orgId=${id}`}>Update</Button>
                            <Button id={id} className={superStyles.orgButton} onClick={() => this.showModal(id)}>Delete</Button>
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        const orgsArr = this.props.orgs
        return(
            <div>
            <Table className={styles.table}>
                <thead className={styles.banner}>
                    <th>Organization</th>
                    <th>Teams</th>
                    <th>Locations</th>
                    <th>Users</th>
                    <th>Select Action</th>
                </thead>
                <tbody className={styles.tableData}>
                    {this.renderTableData(orgsArr)}
                </tbody>
            </Table>
            <Modal
            show={this.state.show} 
            size="lg"
            aria-labelledby="model"
            centered>
            <Modal.Header>
              <Modal.Title id="modal">
                Delete Organization
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>You're about to delete this Organization permanently!!</h4>
              <h4>Are you sure you want to do this?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button className={superStyles.locationButton} onClick={this.hideModal}>Cancel</Button>
              <Button id={this.state.id} className={superStyles.orgButton} onClick={this.handleDelete}>Delete</Button>
            </Modal.Footer>
            </Modal>
            </div>
        )
    }
}


function mapStateToProps(state) {
  const {
    orgs: data,
  } = state;
  // turn the array of ids into an array of objects
  return { orgs: data };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchAllOrgs, deleteOrg};



export default connect(mapStateToProps,mapDispatchToProps)(DataList);


