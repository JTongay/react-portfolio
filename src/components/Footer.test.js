import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer.component';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {};
  return shallow(<Footer {...props} />)
};
let wrapper;

describe('<Footer />', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render 3 links to my contact information', () => {
    expect(wrapper.find('a')).toHaveLength(3);
  });

  it('should render the link to my linkedin', () => {
    expect(wrapper.find('a[href="https://www.linkedin.com/in/josephtongay"]')).toHaveLength(1);
  });

  it('should render the link to my twitter', () => {
    expect(wrapper.find('a[href="https://twitter.com/JosephTongay"]')).toHaveLength(1);
  });

  it('should render the link to my github', () => {
    expect(wrapper.find('a[href="https://github.com/JTongay/"]')).toHaveLength(1);
  });

});
