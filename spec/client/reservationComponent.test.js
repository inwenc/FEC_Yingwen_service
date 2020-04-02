import React from 'react';
import Enzyme from 'enzyme';
import 'babel-polyfill';
//import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// const Adapter = require('enzyme-adapter-react-16');
// const App = require('../../client/src/index');
import { App } from '../../client/src/index';

Enzyme.configure({ adapter: new Adapter() });

// const { shallow, mount, render } = require('enzyme');
// describe('<MyComponent />', () => {
//    it ('renders three components', ()=> {
//     const wrapper = shallow(<MyComponent />);
//      expect(wrapper.find(App)).to.have.lengthOf(1);
//    })
// });
// describe('<MyComponent />', () => {
//   const setup = () => { 
//     return shallow(<App />) 
//   }
//   it('renders three <App /> components', () => {
//     // const component = shallow(<App />);
//     const wrapper = setup()
//     expect(wrapper.find('.MainFrame').toExist())
//   })})


describe('<MyComponent />', () => {
  const setup = () => {
    return shallow(<App />)
  }
  it('renders three <App /> components', () => {
    const wrapper = setup()
    expect(wrapper.find('.MainFrame')).toExist()
  });
})