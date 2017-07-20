//Q1

let largestNum = function(numberlist) {
    var seperate = numberlist.split(",");
    for (i=0; i <= seperate.length; i++) {
      var compare = seperate[i];
      var comptwo = seperate[i+1];
      if (compare || comptwo == NaN) {
        return undefined
      } else if (compare > comptwo) {
        return
        compare
      } else (comptwo > compare) {
        return comptwo;
      }
    };
};

//Q2

var reverseWords = function(string) {
  var splitstring = string.split(" ");

  for (i=0; i <= splitstring.length ; i++) {
    splitstring = i.reverse().join(" ");
  }
  return
  splitstring;
}

//Q3
