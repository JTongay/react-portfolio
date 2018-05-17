import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import ProjectBadges from './ProjectBadges.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    project: {
      imageUrl: 'someImgUrl',
      projectName: 'Test Project Name',
      projectShort: 'this is a test project name short story'
    }
  };
  return shallow(<ProjectBadges {...props} />)
};
let wrapper;

describe('<ProjectBadges />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

});
