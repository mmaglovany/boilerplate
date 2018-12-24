import { CHANGE_USERNAME, CLEAR_USERNAME } from '../constants';

import { changeUsername, clearUsername } from '../actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_USERNAME,
        name: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });

  describe('clearUsername', () => {
    const expectedResult = {
      type: CLEAR_USERNAME,
    };

    expect(clearUsername()).toEqual(expectedResult);
  });
});
