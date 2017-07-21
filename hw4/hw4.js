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

let countDivs = function(str) {
  return $("#outerDiv").length;
};

countDivs();

//Q4
// var persons = [
//   { firstname : 'George', lastname: 'Kolev', age: 32},
//   { firstname : 'Bay', lastname: 'Ivan', age: 81},
//   { firstname : 'Baba', lastname: 'Ginka', age: 40}]
// findYoungestPerson(persons);

var findYoungestPerson(persons) {
  // for (i=0; i > persons.legth; i++) {
  //   var compOne = i[2];
  //   var co
  //   var compTwo = i[2] +1;
  //   if (compOne > compTwo) {
  var xVals = persons.map(function(obj) { return obj.[2]; });
  var min = Math.min.apply(null, xVals);
      return "The youngest person is min[0][1] min[0][2]"
    }
  }
}

//Q5
// var persons = {
//     people.push(new Person("Scott", "Guthrie", 38));
//     people.push(new Person("Scott", "Johns", 36));
//     people.push(new Person("Scott", "Hanselman", 39));
//     people.push(new Person("Jesse", "Liberty", 57));
//     people.push(new Person("Jon", "Skeet", 38));
// };
// function Tree(name) {
//   this.name = name;
// }
var group = function(people,firstName,lastName,age) {
  this.persons = people;
  this.firstName = firstname;
  this.lastName = lastName;
  this.age = age;
};

group.push(new person("John", "Staley", 30));
