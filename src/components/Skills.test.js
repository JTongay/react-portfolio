import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Skills from './Skills.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    skills: ['node', 'express', 'booyah']
  };
  return shallow(<Skills {...props} />)
};
let wrapper;

describe('<Skills />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

});
