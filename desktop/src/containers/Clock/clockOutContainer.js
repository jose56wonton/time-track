import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Formik } from 'formik';

import { shift as shiftValidation } from 'constants/formValidation';
import { shiftActions, employeeActions} from 'store/actions';
import { employeeSelectors, shiftSelectors,taskSelectors,projectSelectors } from 'store/selectors';
import ClockOut from 'components/forms/ClockOut';

class ClockOutContainer extends Component {
  componentDidMount = () => {
    this.props.getCurrentShift(this.props.currentEmployee.id);
  }
  cancel = () => {
    this.props.history.goBack()
  }

  render() {
    const { currentEmployee, currentShift } = this.props;
    const isLoading = !(currentShift);

    if (isLoading) {
      return <div>Loading</div>
    }

    const currentMoment = moment();
    const clockInMoment = moment(currentShift.clockInDate);
    const shiftDuration = moment.duration(currentMoment.diff(clockInMoment));
    const minutes = shiftDuration.asMinutes();

    const clockOutObject = {
      in: clockInMoment.format('h:mm a'),
      out: currentMoment.format('h:mm a'),
      date: clockInMoment.format('MMM Do YYYY'),
      length: `${shiftDuration.hours()}:${shiftDuration.minutes()}`
    };
    //console.log(clockOutObject)
    return (
      <Formik
        initialValues={{ activities: [{ projectTask: 1, length: 500, description: '' }, { projectTask: 2, length: 500, description: '' }] }}
        validationSchema={shiftValidation}
        onSubmit={values => {
          console.log(values);
          const { currentEmployee, currentShift, history } = this.props;
          this.props.clockOut(currentEmployee, currentShift)
            .then(() => history.push('/'))d




        }}
        render={formProps => <ClockOut cancel={this.cancel} shift={clockOutObject} {...formProps} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentShift: shiftSelectors.getCurrentShift(state),
    currentEmployee: employeeSelectors.getCurrentEmployee(state),
    projects: projectSelectors.getAllProjects(state),
    tasks: taskSelectors.getAllTasks(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentShift: (employeeId) => {
      return dispatch(shiftActions.getCurrentShift(employeeId))
    },
    clockOut: (employee, shift) => {
      return dispatch(employeeActions.clockOut(employee, shift))
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClockOutContainer)
)


