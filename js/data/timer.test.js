import Timer from './timer.js';
import {assert} from 'chai';

let timerEnd = false;

const informTimeout = () => {
  timerEnd = true;
  return timerEnd;
};

describe(`Test timer:`, () => {
  it(`should have time getter`, () => {
    const newTimer = new Timer(30, informTimeout);
    assert.exists(newTimer.time);
  });
  it(`should call back when time is over`, () => {
    const newTimer = new Timer(1, informTimeout);
    newTimer.tick();
    assert.isTrue(timerEnd);
  });
});
