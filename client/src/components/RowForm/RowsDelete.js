import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'react-icons/lib/md/delete';
import {connect} from 'react-redux';

import * as actions from './../../actions';

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
      secondary={true}
      keyboardFocused={false}         
      onClick={this.handleClose}
    />,
    ];

    return (
      <div>
        <DeleteIcon
          className="DeleteIcon"    
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
        	<p>Are you sure?</p> 
          <p><small>This data will be permanently removed</small></p>         
        </Dialog>
      </div>
    );
  }
}

export default connect(null, actions)(DeleteRow);