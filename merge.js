function merge(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  newArray = array1;
  newArray.sort(function(a, b){
    return a - b
  });
  return newArray;
}
