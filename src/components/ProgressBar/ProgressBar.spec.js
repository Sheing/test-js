import React from 'react';
// import { shallow } from 'enzyme';
// import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar';
Enzyme.configure({ adapter: new Adapter() });

describe('ProgressBar', () => {
    test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
        const wrapper = Enzyme.shallow(<ProgressBar percent={50} width={100} />);
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(50);
    });
});  