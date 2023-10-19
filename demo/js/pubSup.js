class PubSub {
  constructor() {
    this.pubs = {};
  }
  $on(key = "on", callback = () => {}) {
    if (!(key in  this.pubs)) {
      this.pubs[key] = [];
    }
    if (!this.pubs[key].includes(callback)) {
      this.pubs[key].push(callback);
    }
  }
  $emit(key = "on", ...arg) {
    if (this.pubs[key]) {
      this.pubs[key].forEach((callback) => {
        callback(...arg);
      });
    }
  }
  $off(key = "on", callback = () => {}) {
    if (this.pubs[key]) {
      this.pubs[key] = this.pubs[key].filter((item) => {
        item !== callback;
      });
    }
  }
}

export default new PubSub();