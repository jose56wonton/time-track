import React from 'react';
import { shallow } from 'enzyme';

import { Analyze } from '~/scenes/Analyze/analyze';

const props = {
  classes: {},
  history: {
    goBack: jest.fn(),
    push: jest.fn()
  },
  openSettings: jest.fn(),
  getAllEmployees: jest.fn(),
  getAllProjects: jest.fn(),
  getAllTasks: jest.fn(),
  getShiftsInRange: jest.fn()
};

const setup = overRides => {
  return shallow(<Analyze {...props} {...overRides} />);
};

describe(`Analyze Scene`, () => {
  it(`should render correctly`, () => {
    setup();
  });
  it(`should display different containers based on state.tabValue`, () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    instance.handleTabValueChange(null, 2);
    expect(wrapper.state().tabValue).toEqual(2);
    instance.handleTabValueChange(null, 0);
    expect(wrapper.state().tabValue).toEqual(0);
    instance.handleTabValueChange(null, 3);
    expect(wrapper.state().tabValue).toEqual(3);
  });
  it(`should call this.props.history.push() on this.back()`, () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    expect(props.history.push).toHaveBeenCalledTimes(0);
    instance.back();
    expect(props.history.push).toHaveBeenCalledTimes(1);
  });
});
