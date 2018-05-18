import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    match: {},
    database: () => {},
    state: {}
  };
  return shallow(<Home {...props} />)
};
let wrapper;

xdescribe('<Home /> Container', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

});
