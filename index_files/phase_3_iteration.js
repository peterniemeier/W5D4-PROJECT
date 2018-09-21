Array.prototype.bubbleSort = function() {
  let state = true;
  while (state) {
    state = false;
    let i = 0;
    while (i < this.length) {
      let j = i + 1;

      if (this[i] > this[j]) {
        let first = this[j];
        let second = this[i];
        this[i] = first;
        this[j] = second;
        state = true;
      }
      i++;
    }
  }
  return this;
};

Array.prototype.substrings = function() {
  let arr = [];


};
