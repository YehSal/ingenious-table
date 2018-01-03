import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'react-icons/lib/md/delete';
import {connect} from 'react-redux';

import * as actions from './../actions';

class DeleteRow extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  // Call an action onto this.props.row
  handleDelete() {
  	var selectedRow = this.props.row
  	this.props.deleteRow(selectedRow.id);
    this.handleClose();
  };


  render() {
    const actions = [
      <FlatButton
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.handleDelete()}
      />,
      <FlatButton
      label="No"          
      onClick={this.handleClose}
    />,
    ];

    return (
      <div className="editDialog">
        <DeleteIcon    
          size={35}                                              
          onClick={this.handleOpen}
        />
        <Dialog
          title={`Confirm Delete`}
          actions={actions}          
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{textAlign: "center"}}
          autoScrollBodyContent={true}          
          modal={false}
        >
        	<p> Are you sure you want to delete this row?</p>            
        </Dialog>
      </div>
    );
  }
}

export default connect(null, actions)(DeleteRow);