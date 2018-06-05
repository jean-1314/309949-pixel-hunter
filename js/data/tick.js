const informTimeout = () => {
  /* eslint-disable no-console */
  console.log(`Время вышло`);
};

class Timer {
  constructor(firePeriod, timeoutCallback = null) {
    this.__periodRemaining = firePeriod;
    this.__timeoutCallback = timeoutCallback;
  }

  tick() {
    if (--this.__periodRemaining <= 0) {
      this.__timeoutCallback();
      return false;
    }
    return true;
  }
}

const timer = new Timer(30, informTimeout);

export {informTimeout, timer};
