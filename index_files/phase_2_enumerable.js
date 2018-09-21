Array.prototype.myEach = function(func) {

  for (i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function(func) {
  const arr = [];
  this.myEach(element => arr.push(func(element)));
  return arr;
};

Array.prototype.myReduce = function(func, acc = 0) {
  let result = acc;
  this.myEach(element => result += element);
  return result;
};
