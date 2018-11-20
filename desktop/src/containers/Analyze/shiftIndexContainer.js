import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';

import { employeeActions, taskActions, projectActions, shiftActions, analyzeActions } from 'store/actions';
import { shiftSelectors } from 'store/selectors';
import SortSelectTable from 'components/tables/SortSelect';
import Progress from 'components/helpers/Progress';
import * as TableDataTypes from 'constants/tableDataTypes';
import { analyzeStatus } from 'constants/analyze';
import domain from 'constants/domains';

class ShiftIndexContainer extends Component {
  componentDidMount = () => {
    // Fetching here to ensure that all employees have been fetched before we try and display their name for their shift
    this.props.getAllEmployees();
    this.props.getAllProjects();
    this.props.getAllTasks();
    this.props.getShiftsInRange(moment().subtract(28, 'days').format('MM-DD-YY HH:mm:ss'), moment().add(14,'days').format('MM-DD-YY HH:mm:ss'));
  }
  render() {
    const { shifts, select,setStatus, selected } = this.props;
    const isLoading = !shifts;
    if (isLoading) {
      return <Progress variant="circular" fullWidth fullHeight />;
    }
    return (
      <SortSelectTable
        selectLabel={selected => { return `${selected.employee.firstName} ${selected.employee.lastName}'s shift selected`; }}
        label="Shifts"
        tableData={shifts}
        headerData={rows}
        selected={selected}
        select={object =>select(domain.SHIFT,object)}
        add={() => setStatus(domain.SHIFT,analyzeStatus.ADDING)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    shifts: shiftSelectors.getShiftsInRange(state, { startTime: moment().subtract(28, 'days').format('MM-DD-YY HH:mm:ss'), endTime: moment().add(14,'days').format('MM-DD-YY HH:mm:ss') }),
    selected: shiftSelectors.getSelectedShift(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllEmployees: () => {
      return dispatch(employeeActions.getAllEmployees());
    },
    getAllProjects: () => {
      return dispatch(projectActions.getAllProjects());
    },
    getAllTasks: () => {
      return dispatch(taskActions.getAllTasks());
    },
    getShiftsInRange: (start, end) => {
      return dispatch(shiftActions.getShiftsInRange(start, end));
    },
    
    ...bindActionCreators({ ...analyzeActions }, dispatch)   
  };
};

ShiftIndexContainer.propTypes = {
  shifts: PropTypes.array,
  getShiftsInRange: PropTypes.func.isRequired,
  getAllEmployees: PropTypes.func.isRequired,
  getAllProjects: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  selected: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ShiftIndexContainer);

const rows = [
  {
    id: 'employee',
    numeric: false,
    padding: 'dense',
    label: 'First Name',
    type: TableDataTypes.OBJECT,
    keys: ['firstName']
  },
  {
    id: 'employee',
    numeric: false,
    padding: 'dense',
    label: 'Last Name',
    type: TableDataTypes.OBJECT,
    keys: ['lastName']
  },
  {
    id: 'clockInDate',
    numeric: false,
    padding: 'dense',
    label: 'Clock In',
    type: TableDataTypes.DATETIME
  },
  {
    id: 'clockOutDate',
    numeric: false,
    padding: 'dense',
    label: 'Clock Out',
    type: TableDataTypes.DATETIME
  },
  {
    id: 'length',
    numeric: false,
    padding: 'dense',
    label: 'Length',
    type: TableDataTypes.LENGTH
  }
];