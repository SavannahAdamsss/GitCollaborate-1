var students = [{
    name: 'Will',
    age: 27
  },
  {
    name: 'Savannah',
    age: 31
  }
];

var numbers = [2, 4, 7, 9];

const product = numbers.reduce((total, number) => total * number);
return product


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }

};

evenNumbers(nums);
alert(evens);
alert(odds);