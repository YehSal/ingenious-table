import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import * as actions from './../actions';
import RowsDelete from './RowForm/RowsDelete';
import RowsEdit from './RowForm/RowsEdit';

class InGeniousTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stripedRows: false,
      showRowHover: true,
      displayRowCheckbox: false
    };
    this.props.fetchRows(); // Fetch all rows
  }

  formatDate = (date) => {
    return (date.getMonth() + 1) + '/' + date.getDay() + '/' +  date.getFullYear();
  }

  renderRows = () => {
    return _.map(this.props.rows, row => {
      if (row !== undefined) {
        var formattedDate = this.formatDate(new Date(row.date));
        return(
          <TableRow key={row.id}>
            <TableRowColumn>{row.student}</TableRowColumn>
            <TableRowColumn>{row.counselor}</TableRowColumn>
            <TableRowColumn>{row.hours}</TableRowColumn>
            <TableRowColumn>{formattedDate}</TableRowColumn>
            <TableRowColumn>
              <RowsEdit row={row} />
            </TableRowColumn>
            <TableRowColumn>
              <RowsDelete row={row} />
            </TableRowColumn>
          </TableRow>
        );
      } else {
        return;
      }
    });
  }

  renderHeaderColumns = () => {
    return(
      <TableRow>
        <TableHeaderColumn>Student</TableHeaderColumn>
        <TableHeaderColumn>Counselor</TableHeaderColumn>
        <TableHeaderColumn>Hours</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Edit</TableHeaderColumn>
        <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
    );
  }

  renderFooterColumns = () =>{
    return(
      <TableFooter
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Student</TableHeaderColumn>
          <TableHeaderColumn>Counselor</TableHeaderColumn>
          <TableHeaderColumn>Hours</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Edit</TableHeaderColumn>
          <TableHeaderColumn>Delete</TableHeaderColumn>
        </TableRow>
      </TableFooter>
    );
  }

  render() {
    return (
      <div className="TableContainer">
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
            {this.renderHeaderColumns()}
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.displayRowCheckbox}
            showRowHover={this.state.showRowHover}
          >
            {this.renderRows()}
          </TableBody>
          {this.renderFooterColumns()}
        </Table>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {rows: state.row};
}

export default connect(mapStatetoProps, actions)(InGeniousTable);