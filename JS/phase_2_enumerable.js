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

Array.prototype.myReduce = function(func, acc) {
  let workingArr = this;
  if (!acc) {
    acc = this[0];
    workingArr = workingArr.slice(1);
  }
  let result = acc;

  workingArr.myEach(element => result = func(result, element));
  return result;
};
