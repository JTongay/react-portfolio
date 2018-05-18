import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import ProjectInfo from './ProjectInfo.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    project: {
      project_about: 'something about the project',
      project_name: 'Test Project Name',
      project_story: 'this is a test project story'
    }
  };
  return shallow(<ProjectInfo {...props} />)
};
let wrapper;

describe('<ProjectInfo />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should show the project name', () => {
    expect(wrapper.find('h1').text()).toBe('Test Project Name');
  });

  it('should render the project story', () => {
    expect(wrapper.find('p').at(1).text()).toBe('something about the project');
  });

  it('should render something about the project', () => {
    expect(wrapper.find('p').at(0).text()).toBe('this is a test project story');
  });

});
