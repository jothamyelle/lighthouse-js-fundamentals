function whichSchool(age) {
  // if age is below 13
  if (age < 13) {
    return "Elementary School";
  }
  // if age is between 13 and 18
  else if (age <= 18) {
    return "Secondary School";
  }
  // if age is over 18
  else {
    return "Lighthouse Labs";
  }
}
