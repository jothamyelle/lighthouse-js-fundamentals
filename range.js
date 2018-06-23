function range(start, end, step) {
  var array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return array;
  }
  else if (start > end) {
    return array;
  }
  else if (step < 0) {
    return array;
  } else {
    var i;
    for (i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  }
}