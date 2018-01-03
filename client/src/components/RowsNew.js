// StudentNew show a dialog that contains a form to add a new row
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {DatePicker} from 'redux-form-material-ui'
import * as actions from './../actions';

import StudentField from './StudentField';


class StudentsNew extends Component {
 	constructor(props) {
    super(props);    
    this.state = {
      open: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  renderFields() {
    return (
      <div>
        <Field 
          label="Student" 
          type="text" 
          name="student" 
          component={StudentField} 
        />
        <Field 
          label="Counselor" 
          type="text" 
          name="counselor" 
          component={StudentField} 
        />
        <Field 
          label="Hours" 
          type="number" 
          name="hours" 
          component={StudentField} 
        />
        <Field 
          label="Date"
          floatingLabelText={'Date'}
          name="date" 
          component={DatePicker}
          format={(value, name) => value === '' ? null : value} 
        />
      </div>
    );
  };

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <FloatingActionButton onClick={this.handleOpen} style={{marginRight:20}}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add Student"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{textAlign: "center"}}    
        >
          <div>
            <form onSubmit={this.props.handleSubmit(values => {
            	console.log('before rowNew', this.state)
            	this.props.addRow(values);
            	console.log('after rowNew', this.state)
            })}>
              {this.renderFields()}
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
              <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onClick={ () => {this.handleClose(); this.props.reset();}}
              />
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if(!values.row) {
    errors.row = 'You must provide a student name';
  }

  if(!values.counselor) {
    errors.counselor = 'You must provide a counselor name';
  }

  if(!values.hours) {
    errors.hours = 'You must provide the hours';
  }

  if(!values.date) {
    errors.date = 'You must provide a date';
  }

  return errors;
}

StudentsNew = connect(null, actions)(StudentsNew);
export default reduxForm({
  validate,
  form: 'studentForm'
})(StudentsNew);