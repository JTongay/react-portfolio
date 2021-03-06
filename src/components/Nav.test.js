import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {};
  return shallow(<Nav {...props} />)
};
let wrapper;

describe('<Nav />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have my logo', () => {
    expect(wrapper.find('.jt-logo')).toBeDefined();
  });

  it('should have a link to my email', () => {
    expect(wrapper.find('a[href="mailto:joseph.tongay@gmail.com"]')).toBeDefined();
  });

});
