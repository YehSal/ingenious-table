// StudentNew show a dialog that contains a form to add a new row
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import * as actions from './../../actions';
import {validate} from './rowFormValidation';
import {renderFields} from './rowFormFields';

class RowsNew extends Component {
 	constructor(props) {
    super(props);    
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton 
        label="Cancel" 
        onClick={this.handleClose}
      />
    ];
    return (
      <div style={{textAlign:"center"}}>
        <FloatingActionButton onClick={this.handleOpen} style={{marginRight:20}}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add Student"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{textAlign: "center"}}    
        >
          <div>
            <form onSubmit={this.props.handleSubmit(values => {
            	this.props.addRow(values);
              this.handleClose();
              this.props.reset();
            })}>
              {renderFields()}
              <FlatButton
              	type="submit"
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.handleClose}
              />
               <FlatButton
                label="Reset"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.reset}
              />
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
};

RowsNew = connect(null, actions)(RowsNew);
export default reduxForm({
  validate,
  form: 'studentForm'
})(RowsNew);