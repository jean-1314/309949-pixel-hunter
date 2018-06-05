import {timer} from './tick.js';
import {assert} from 'chai';

describe(`Test timer:`, () => {
  it(`should decrease timers`, () => {
    assert(timer.tick() === true);
  });
});
