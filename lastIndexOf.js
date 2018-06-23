function lastIndexOf(array, value) {
  var lastIndexOf = -1;
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) {
      lastIndexOf = i;
    }
  }
  return lastIndexOf;
}