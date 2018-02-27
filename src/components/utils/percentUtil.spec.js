import {getWidthAsPercentOfTotalWidth} from './percentUtils'
//import { watch } from 'fs';

describe('getWidthAsPercentOfTotalWidth',()=>{
    test('should return 250 with total width of 500 and percent of 50',()=>{
        const width = getWidthAsPercentOfTotalWidth(50,500);
        expect(width).toEqual(250);
    })
})