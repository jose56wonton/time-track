import React from 'react';
import { mount } from 'enzyme';

import { EmployeeIndex } from '~/containers/Employee/employeeIndex.container';
import Progress from '~/components/helpers/Progress';

import domain from '~/constants/domains';

const props = {
  selected: {
    authorityId: 1,
    crewId: 1,
    firstName: `Joshua`,
    id: 2,
    isEmployed: 1,
    isWorking: 1,
    lastName: `Wootonn`,
    pin: 565656,
    authority: { id: 1, type: `Admin` },
    crew: { id: 1, name: `Crew 3` }
  },
  select: jest.fn(),
  employees: [
    {
      authorityId: 1,
      crewId: 1,
      firstName: `Joshua`,
      id: 2,
      isEmployed: 1,
      isWorking: 1,
      lastName: `Wootonn`,
      pin: 565656,
      authority: { id: 1, type: `Admin` },
      crew: { id: 1, name: `Crew 3` }
    },
    {
      authorityId: 1,
      crewId: 1,
      firstName: `Jay`,
      id: 1,
      isEmployed: 1,
      isWorking: 0,
      lastName: `Simon`,
      pin: 234234,
      authority: { id: 1, type: `Admin` },
      crew: { id: 1, name: `Crew 3` }
    },
    {
      authorityId: 1,
      crewId: 1,
      firstName: `adfsadfs`,
      id: 3,
      isEmployed: 1,
      isWorking: 0,
      lastName: `adsfadsf`,
      pin: 234545,
      authority: { id: 1, type: `Admin` },
      crew: { id: 1, name: `Crew 3` }
    }
  ],
  setStatus: jest.fn(),
  getAllEmployees: jest.fn().mockImplementationOnce(() => Promise.resolve())
};

const setup = overRides => {
  return mount(<EmployeeIndex {...props} {...overRides} />);
};

describe(`Employee Index Container`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it(`should render correctly`, () => {
    setup();
  });
  it(`should render loader if employees falsey`, () => {
    const wrapper = setup({ employees: null });
    expect(wrapper.find(Progress).length).toBeGreaterThan(0);
  });
  it(`should call props.select on this.select`, () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    expect(props.select).toHaveBeenCalledTimes(0);
    instance.select({ id: 1 });
    expect(props.select).toHaveBeenCalledTimes(1);
    expect(props.select).toHaveBeenCalledWith(domain.EMPLOYEE, { id: 1 });
  });
});
