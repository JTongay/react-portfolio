import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Links from './Links.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = (linkProps) => {
  const props = {
    links: linkProps
  };
  return shallow(<Links {...props} />)
};
let wrapper;

describe('<Links />', () => {

  it('should exist', () => {
    let someLinks = [['github tests', 'github 2 tests'], 'Live Link test'];
    wrapper = setup(someLinks);
    expect(wrapper).toBeDefined();
  });

  it('should render with only 1 github link', () => {
    let oneGitLink = [['link to github'], ''];
    wrapper = setup(oneGitLink);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('a.link')).toHaveLength(1);
    expect(wrapper.find('a.link').text()).toBe('Github');
  });

  it('should render with only 2 github links', () => {
    let twoGitLinks = [['link to github', 'second link to github'], ''];
    wrapper = setup(twoGitLinks);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('a.link')).toHaveLength(2);
  });

  it('should render a live link with 2 github links', () => {
    let fullLinks = [['link to github', 'second link to github'], 'link to prod'];
    wrapper = setup(fullLinks);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('a.link')).toHaveLength(3);
  });

  it('should display "Frontend Github" if it meets requirements', () => {
    let links = [['this is frontend'], ''];
    wrapper = setup(links);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('a.link')).toHaveLength(1);
    expect(wrapper.find('a.link').text()).toBe('Frontend Github');
  });

  it('should display "Backend Github" if it meets the requirements', () => {
    let links = [['this is backend'], ''];
    wrapper = setup(links);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('a.link')).toHaveLength(1);
    expect(wrapper.find('a.link').text()).toBe('Backend Github');
  });

  it('should display both "Frontend Github" and "Backend Github" if it meets the requirements', () => {
    let links = [['this is backend', 'this is frontend'], ''];
    wrapper = setup(links);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('a.link')).toHaveLength(2);
    expect(wrapper.find('a.link').at(0).text()).toBe('Backend Github');
    expect(wrapper.find('a.link').at(1).text()).toBe('Frontend Github');
  })

});
