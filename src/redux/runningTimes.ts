import { createModel } from '@rematch/core';
import { RootModel } from './models';
import queryString from 'query-string';

const parsed = queryString.parse(window.location.search);
const height = window.innerHeight;

const mockTableData = [
    {
        name: 'Eightfeet',
        age: '18',
        height: '170',
        weight: '70'
    },
    {
        name: 'Mike',
        age: '20',
        height: '168',
        weight: '57'
    },
    {
        name: 'Jimm',
        age: '24',
        height: '170',
        weight: '60'
    }
]

const windowHeight = {
    height,
    half: Math.floor(height/2),
    quarter: Math.floor(height/4), 
    oneTenth: Math.floor(height/10), 
    oneTwentieth: Math.floor(height/20), 
    oneThirtieth: Math.floor(height/30),
}

interface RunningTimesItem {
    [keys: string]: any;
}

/**
 * 全局变量，被动增加，被动使用，
 */
export const runningTimes = createModel<RootModel>()({
    state: {
        search: parsed,
        windowHeight,
        mockTableData,
    } as {
        [keys: string]: RunningTimesItem;
    }, 

    reducers: {
        setRunningTimes(state, payload: RunningTimesItem) {
            return { ...state, ...payload };
        },
    }
});
