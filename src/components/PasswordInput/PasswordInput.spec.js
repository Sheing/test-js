import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('toggles input type when show/hide password clicked', () => {
    const wrapper = Enzyme.shallow(<PasswordInput
        htmlId="test"
        name="test"
        value=""
        onChange={() => { }}
        showVisibilityToggle
    />);

    // Password input should have type password initially
    expect(wrapper.find({ type: 'password' })).toHaveLength(1);
    expect(wrapper.find({ type: 'text' })).toHaveLength(0);

    wrapper.find('a').simulate('click');

    // Password input should have type text after click
    expect(wrapper.find({ type: 'password' })).toHaveLength(0);
    expect(wrapper.find({ type: 'text' })).toHaveLength(1);
});


test('hides password quality by default',()=>{
    const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={()=>{}}
    value="Uisi38#iad" />).toJSON();

    expect(tree).toMatchSnapshot();
});