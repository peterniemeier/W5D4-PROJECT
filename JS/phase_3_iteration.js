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

String.prototype.substrings = function() {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j < this.length + 1; j++) {
      arr.push(this.slice(i, j));
    }
  }
  return arr;
};
