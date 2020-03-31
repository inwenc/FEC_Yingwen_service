import React from 'react';
import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// const Adapter = require('enzyme-adapter-react-16');
// const App = require('../../client/src/index');
import App from '../../client/src/index';

//Enzyme.configure({ adapter: new Adapter() });

// const { shallow, mount, render } = require('enzyme');
// describe('<MyComponent />', () => {
//    it ('renders three components', ()=> {
//     const wrapper = shallow(<MyComponent />);
//      expect(wrapper.find(App)).to.have.lengthOf(1);
//    })
// });
describe('<MyComponent />', () => {
  it('renders three <App /> components', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.mainFrame')
    expect(wrapper.length.toBe(1)
  });