import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {DatePicker} from 'redux-form-material-ui'
import EditIcon from 'react-icons/lib/md/mode-edit';

import * as actions from './../actions';

import StudentField from './StudentField';



class RowEdit extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,     
    };  
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('handleChange');
    // const { newRecord } = this.state;
    // newRecord[event.target.name] = event.target.value;
    // this.setState({ newRecord });
  }

  handleChangeDate(event, date) {
    console.log('handleChangeDate');    
    // let { newRecord } = this.state;
    // newRecord.dateJoined = date.toJSON();
    // this.setState({ newRecord: newRecord });    
  }

  handleSubmit(event) {                 
    console.log('handleSubmit');
    // let formattedRecord = this.state.newRecord        
    // socket.emit('record:client:update', formattedRecord);        
    // this.setState({open: false, newRecord: {}});  
    this.setState({open: false});

  }

  handleOpen = () => {
    this.setState({open: true});
    // this.setState({open: true, newRecord: this.props.row});    
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
    const actions = [
      <FlatButton
      label="Cancel"          
      onClick={this.handleClose}
    />,
    ];
    // let { newRecord } = this.state;       
    // if ( newRecord != null) {     
      // newRecord.dateJoined = new Date(newRecord.dateJoined);
      return (
        <div>
          <EditIcon
            size={30}                            
            className="editButton"
            onClick={this.handleOpen}
          />   
          <Dialog
            actions={actions} 
            open={this.state.open}
            onRequestClose={this.handleClose}
            contentStyle={{textAlign: "center"}}
            autoScrollBodyContent={true}
            modal={true}
          >
            <form onSubmit={this.props.handleSubmit(values => {
              const selectedRow = this.props.row;
              this.props.editRow(values, selectedRow.id);
              this.setState({open: false});
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

RowEdit = connect(null, actions)(RowEdit);
export default reduxForm({
  validate,
  form: 'studentForm'
})(RowEdit);  
