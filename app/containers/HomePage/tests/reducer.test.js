import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changeUsername, clearUsername } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      username: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('username', fixture);

    expect(homeReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });

  it('should handle the clearUsername action correctly', () => {
    const expectedResult = state;

    expect(homeReducer(state, clearUsername())).toEqual(expectedResult);
  });
});
