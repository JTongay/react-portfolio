import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Project from './Project';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    match: {}
  };
  return shallow(<Project {...props} />)
};
let wrapper;

xdescribe('<Project /> Container', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    console.log(wrapper);
    expect(wrapper).toBeDefined();
  });

});
