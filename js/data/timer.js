export default class Timer {

  constructor(time, callback) {
    this.time = time;
    this.callback = callback;
  }

  get time() {
    return this._time;
  }
  set time(verifiedTime) {
    this._time = verifiedTime >= 0 ? verifiedTime : 0;
  }
  tick() {
    if (this._time > 0) {
      this._time--;
      if (this._time === 0) {
        this.callback();
      }
    }
  }
}
