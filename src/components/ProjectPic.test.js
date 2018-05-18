import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import ProjectPic from './ProjectPic.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      image: 'imageUrl'
  };
  return shallow(<ProjectPic {...props} />);
};

let wrapper;

describe('<ProjectPic />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

});
