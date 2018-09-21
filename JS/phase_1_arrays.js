// Array.prototype.uniq = function() {
//   let arr = [];
//   this.forEach(function(el) {
//     if (!arr.includes(el))
//       arr.push(el);
//     return arr;
//   });
// };

Array.prototype.uniq = function() {
  let arr = [];

  for (i = 0; i < this.length; i++){
    if (arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.twoSum = function() {
  let arr = [];

  for (i = 0; i < this.length -1; i++) {
    for (j = i+1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        arr.push([i,j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function() {
  let transposed = [];

  for (let i = 0; i < this.length; i++) {
      transposed.push([]);
  }
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this[i].length; j++) {
        transposed[j].push(this[i][j]);
      }
    }
    return transposed;
};
