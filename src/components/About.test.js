import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import About from './About.component';

// "test": "mocha --reporter spec tools/testSetup.js \"src/**/*.spec.js\"",
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {};
  return shallow(<About {...props} />)
};
let wrapper;

describe('<About /> component', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h1 with my name', () => {
    expect(wrapper.find('h1').text()).toBe('My name is Joseph Tongay');
  });

  it('should have my image', () => {
    expect(wrapper.find('img')).toBeDefined();
  });

});
