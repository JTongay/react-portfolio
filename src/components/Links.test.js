import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Links from './Links.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    links: ['test', 'test']
  };
  return shallow(<Links {...props} />)
};
let wrapper;

describe('<Links />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

});
