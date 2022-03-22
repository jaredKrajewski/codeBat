/*
Goal: return the number of even ints in an array. 
Params: array: a;
Return Val: int
Logic:
loop over array and return a count of even ints.

Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

countEvens([2, 1, 2, 3, 4]) → 3
countEvens([2, 2, 0]) → 3
countEvens([1, 3, 5]) → 0
*/

function countEvens(a) {
    let count = 0;
    for (i = 0; i < a.length; i++) {
      if (a[i] % 2 == 0) {
        count += 1;
      }
    }
    return count;
  }
  
  console.log(countEvens([1, 3, 5]));

  /*
Goal: take an array and return difference between the largest and smallest values. 
Params:array: a;
Return Val: int;
Logic:
let min = first element of arr
let max = first element of arr
loop over array and check of next iteration for min or max is greater and assign it to variable
return difference of min and max.
Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

bigDiff([10, 3, 5, 6]) → 7
bigDiff([7, 2, 10, 9]) → 8
bigDiff([2, 10, 7, 2]) → 8
*/

function bigDiff(a) {
    let max = a[0];
    let min = a[0];
    for (i = 0; i < a.length; i++) {
      max = Math.max(max, a[i]);
      min = Math.min(min, a[i]);
    }
    return max - min;
  }
  
  console.log(bigDiff([2, 10, 7, 2]));
// or
function bigDiff(a) {
    return Math.max(...a) - Math.min(...a)
  }
  
  console.log(bigDiff([2, 10, 7, 2]));

/*
Goal: return the avg of an array after removing the largest and smallest.
Params:array;
Return Val:int;
Logic: reduce array to a total. remove the highest num in the array and the lowest num in array
divide the avg with array length minus 2 for removed high and low

Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

centeredAverage([1, 2, 3, 4, 100]) → 3
centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5
centeredAverage([-10, -4, -2, -4, -2, 0]) → -3
*/

function centeredAverage(a) {
  let avg =
    a.reduce((total, current) => total + current) -
    Math.min(...a) -
    Math.max(...a);

  return avg / (a.length - 2);
}
console.log(centeredAverage([1, 2, 3, 4, 100]));

/*
Goal:return the sum of numbers in an array. 0 for empty array. if 13 is in array it does not count as well as numbers that follow.
Params: Array: arr; 
Return Val: int
Logic:
variable for total;
loop over array;
if a num is equal to 13 return the current total;
otherwise add each num to total
return total

Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

sum13([1, 2, 2, 1]) → 6
sum13([1, 1]) → 2
sum13([1, 2, 2, 1, 13]) → 6
*/

function sum13(arr) {
  let total = 0;
  if (arr.length === 0){
    return 0;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 13) {
      return total;
    }
    total += arr[i];
  }
  return total;
}

console.log(sum13([1, 2, 2, 1, 13]));

/* 
Goal:take an array and return sum ignoring sections that start with 6 and end with 7. return 0 for empty arr.
Params:
Return Val:
Logic:
variable for start index, 
variable for end index;
loop over array and assign index of first 6 to start
assign index of 7 to end
splice out from start(first 6) to end (plus one to remove it as well)
return the sum of the remaining array

Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

sum67([1, 2, 2]) → 5
sum67([1, 2, 2, 6, 99, 99, 7]) → 5
sum67([1, 1, 6, 7, 2]) → 4
*/

function sum67(arr) {
  let start;
  let end;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 6) {
      start = arr.indexOf(arr[i]);
    }
    if (arr[i] == 7) {
      end = arr.indexOf(arr[i]);
    }
    arr.splice(start, end - start + 1);
  }
  return arr.reduce((current, num) => current + num);
}
console.log(sum67([1, 2, 2, 6, 99, 99, 7, 1, 1, 34]));

/* 
Goal: given an array return true if array contains a 2 followed by a 2
Params: array: arr;
Return Val: boolean;
Logic:
loop over array. if any index and the following index is 2
return true
otherwise return false

Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false
*/

function has22(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 2 && arr[i + 1] == 2) {
      return true;
    }
  }
  return false;
}

console.log(has22([1, 2, 3, 2]));

/* 
Goal: if array contains 2 with a 2 in the following index, return true;
Params: array: arr;
Return Val: boolean
Logic: loop over array. if an index is 2 and the following index is 2 return true
otherwise return false;

Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false
*/

function has22(arr) {
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] == 2) & (arr[i + 1] == 2)) {
      return true;
    }
  }
  return false;
}

console.log(has22([1, 2, 1, 2, 2]));

/* 
Goal:take an array and return true if no 1's or 3's in array;
Params: array: arr;
Return Val: boolean;
Logic: loop over array. if any index not equal 1 or 3 return true otherwise return false;

Given an array of ints, return true if the array contains no 1's and no 3's.

lucky13([0, 2, 4]) → true
lucky13([1, 2, 3]) → false
lucky13([1, 2, 4]) → false
*/

function lucky13(arr) {
  for (let num of arr) {
    if (num == 1 || num == 3) {
      return false;
    }
  }
  return true;
}

console.log(lucky13([2, 2, 1]));

/* 
Goals:take array, return true if the sum of all 2's is 8
Params: array: arr;
Return Val: boolean;
Logic:
iterate over array, 
if the sum of all 2's is 8 return true
otherwise return false;

Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

sum28([2, 3, 2, 2, 4, 2]) → true
sum28([2, 3, 2, 2, 4, 2, 2]) → false
sum28([1, 2, 3, 4]) → false
*/

function sum28(arr) {
  let two = arr.filter((num) => num == 2);
  if (two.reduce((total, num) => num + total) == 8) {
    return true;
  }
  return false;
}

console.log(sum28([2, 3, 2, 4, 4, 2, 2]));

/* 
Goal: take array, return true if more 1's than 4's
Params: array: arr;
Return Val: boolean;
Logic:
loop over array and accumulate 1's in variable
loop over array and accumalate 4's in variable
if 1's > 4's return true
otherwise return.

Given an array of ints, return true if the number of 1's is greater than the number of 4's

more14([1, 4, 1]) → true
more14([1, 4, 1, 4]) → false
more14([1, 1]) → true
*/

function more14(arr) {
  let one = arr.filter((num) => num == 1);
  let four = arr.filter((num) => num == 4);
  if (one.length > four.length) {
    return true;
  }
  return false;
}

console.log(more14([1, 4, 1, 4]));

/* 
Goal:given a num create and return a new int array of that length containing ascending ordered numbers. if n is 0 return 0
Params: int: a
Return Val: array
Logic: 
given n, create and return a new arrayt of that length containing ascending numbers.

Given a number n, create and return a new int array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new int array is: new int[desired_length]   (See also: FizzBuzz Code)

fizzArray(4) → [0, 1, 2, 3]
fizzArray(1) → [0]
fizzArray(10) → [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

function fizzArray(a) {
  let arr = [];
  for (i = 0; i < a; i++) arr.push(i);
  return arr;
}

console.log(fizzArray(10));


/* 
Goal:take array, return true if every element is 1 or 4
Params: array: arr
Return Val: boolean
Logic:
filter elements that are 1 or 4 into new array. 
if the array contains the same amount of elements as original all elements must be a 1 or 4 so return true
otherwise return false;

Given an array of ints, return true if every element is a 1 or a 4.

only14([1, 4, 1, 4]) → true
only14([1, 4, 2, 4]) → false
only14([1, 1]) → true
*/

function only14(arr) {
  let targetNums = arr.filter((num) => num == 1 || num == 4);
  if (targetNums.length == arr.length) {
    return true;
  }
  return false;
}

console.log(only14([1, 1, 1, 1, 4, 4, 4, 4]));

/* 
Goal:take a number, return an array of  strings of that length containing ascending strings(["1", "2"])
Params: int: a;
Return Val: array;
Logic: make new array
loop n amount of times and push incrementing number to an array as a string.

Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String.valueOf(xxx) will make the String form of most types. The syntax to make a new string array is: new String[desired_length]  (See also: FizzBuzz Code)

fizzArray2(4) → ["0", "1", "2", "3"]
fizzArray2(10) → ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
fizzArray2(2) → ["0", "1"]
*/

function fizzArray2(a) {
  let newArr = [];
  for (i = 0; i < a; i++) {
    newArr.push(i.toString());
  }
  return newArr;
}

console.log(fizzArray2(4));

/* 
Goal: take array, return true if no 1's or 4's in array
Params: array: arr
Return Val: boolean
Logic:
filter elemenets that equal one to variable
filter elements that equal four to variable
if ether variable is empty return true (checking for 1's or 4's)
otherwise return false;

Given an array of ints, return true if it contains no 1's or it contains no 4's.

no14([1, 2, 3]) → true
no14([1, 2, 3, 4]) → false
no14([2, 3, 4]) → true
*/

function no14(arr) {
  let one = arr.filter((num) => num == 1);
  let four = arr.filter((num) => num == 4);
  if (one == !true || four == !true) {
    return true;
  }
  return false;
}

console.log(no14([2, 3, 4]));

/* 
Goal: return true if a value seen within pairs anywhere in an array.
Params: array: arr, int: n;
Return Val:boolean
Logic:
loop over the array. 
if first index is not number and second index is not number 
return false
otherwise return true;


We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

isEverywhere([1, 2, 1, 3], 1) → true
isEverywhere([1, 2, 1, 3], 2) → false
isEverywhere([1, 2, 1, 3, 4], 1) → false
*/

function isEverywhere(arr, n) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== n && arr[i + 1] !== n) {
      return false;
    }
  }
  return true;
}

console.log(isEverywhere([1, 2, 1, 3], 2));

/* 
Goal:take an array and return true if it contains a 2 next to a 2 or a 4 next to a 4
Params:
Return Val:
Logic:
initiate variable for four to false
initiate variable for two to false
loop over array and see if a number and the following are a 2 and a 2 and if they are set two to true
loop over array and see if a number and the following are a 4 and a 4 and if they are set four to true
if four and two are true return false;
if two or four are true return true;
otherwise return false

Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

either24([1, 2, 2]) → true
either24([4, 4, 1]) → true
either24([4, 4, 1, 2, 2]) → false
*/

function either24(arr) {
  let four = false;
  let two = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 2 && arr[i + 1] == 2) {
      two = true;
    }
    if (arr[i] == 4 && arr[i + 1] == 4) {
      four = true;
    }
  }
  if (four && two) {
    return false;
  }
  if (two || four) {
    return true;
  }
  return 0;
}

console.log(either24([2, 2, 1, 2]));

/* 
Goal: take two arrays of the same length. for every element in nums1 consider the corresponding element in nums 2. return a count of times the two elements differ by 2 or less but are not equal.
Params: array1: arr1, array2: arr2;
Return Val: int
Logic: 
declare a count;
loop over array check if first index of each array is not indentical
then check to see if it is less than 2 higher and less than 2 lower
if it is increment count
return count;

Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

matchUp([1, 2, 3], [2, 3, 10]) → 2
matchUp([1, 2, 3], [2, 3, 5]) → 3
matchUp([1, 2, 3], [2, 3, 3]) → 2
*/

function matchUp(arr1, arr2) {
  let count = 0;
  for (i = 0; i < arr1.length; i++) {
    if (
      arr1[i] != arr2[i] &&
      arr1[i] <= arr2[i] + 2 &&
      arr1[i] >= arr2[i] - 2
    ) {
      count += 1;
    }
  }
  return count;
}
console.log(matchUp([1, 2, 3], [2, 3, 3]));

/* 
Goal: take array and return true if two 7's are next to eachother or separated by one element.
Params: array: arr;
Return Val: boolean;
Logic: 
loop over array and see if the current index is 7;
also check if the +1 index is 7 or the + 2 index
if so return true
otherwise return false;

Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

has77([1, 7, 7]) → true
has77([1, 7, 1, 7]) → true
has77([1, 7, 1, 1, 7]) → false
*/

function has77(arr){
  for (i = 0; i < arr.length; i++){
    if (arr[i] == 7 && (arr[i + 1 ] == 7 || arr[i + 2] == 7)){
      return true;
    }
  }
  return false;
}

console.log(has77([1, 7, 7]))

/* 
Goal: take an array and return if there is a one followed by a two anywhere in the array.
Params: array: arr;
Return Val: boolean;
Logic:
declare one and set it to false;
loop over array and if an index is 1 set one to true;
if one is true and any following index is 2
return true
otherwise return false;

Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

has12([1, 3, 2]) → true
has12([3, 1, 2]) → true
has12([3, 1, 4, 5, 2]) → true
*/

function has12(arr) {
  let one = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      one = true;
    }
    if (one && arr[i] == 2) {
      return true;
    }
  }
  return false;
}

console.log(has12([2, 1, 2, 5, 4]));

/* 
Goal: take an array and return true if the array contains 3 even or 3 odd numbers in a row.
Params: array: arr;
Return Val: boolean;
Logic: 
loop over array. 
if array index 1, +1, and +2 are all odd 
return true
if the array index 1, + 1, and + 2 are all even
return true
otherwise return odd;

Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.

modThree([2, 1, 3, 5]) → true
modThree([2, 1, 2, 5]) → false
modThree([2, 4, 2, 5]) → true
*/

function modThree(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
      return true;
    }
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
      return true;
    }
  }
  return false;
}

console.log(modThree([2, 4, 2, 5]));

/* 
Goal: return true if val 3 appaears 3 times in an array and is not next to another 3
Params: array: arr; 
Return Val: boolean
Logic:
variable for count;
loop over array and if arr[i] is equal to 3 and the following index is not increment the count;
if the count is 3 return true;
otherwise return false;

Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

haveThree([3, 1, 3, 1, 3]) → true
haveThree([3, 1, 3, 3]) → false
haveThree([3, 4, 3, 3, 4]) → false
*/

function haveThree(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 3 && arr[i + 1] !== 3) {
      count += 1;
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
}
console.log(haveThree([3, 1, 3, 3]));

/*
Goal: return true if every 2 in an array appears next to another 2;
Params: array: arr;
Return Val: boolean
Logic:
loop over array and check if an index = 2 as well as the index before and after; return true
otherwise return false;

Given an array of ints, return true if every 2 that appears in the array is next to another 2.

twoTwo([4, 2, 2, 3]) → true
twoTwo([2, 2, 4]) → true
twoTwo([2, 2, 4, 2]) → false
*/

function twoTwo(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 2 && arr[i + 1] !== 2 && arr[i - 1] !== 2) {
      return false;
    }
  }

  return true;
}
console.log(twoTwo([2, 2, 4]));

/*
Goal: return true if the group of n numbers at the start and end of array are the same if n is 0 and 2 its true and 1 and 3 is false;
Params: array: arr; int: num;
Return Val:boolean;
Logic:
loop over array; if the index is equal to the end of the array at index - num + i
otherwise return false;


Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.

sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false
sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false
*/

function sameEnds(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - num + i]) {
      return true;
    }
  }
  return false;
}

console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2));

/*
Goal: return true if anywhere in an array contains three incremental nums
Params: array: arr;
Return Val: boolean;
Logic:
loop over array;
if the current index with one added two it is equal to the following index it is ascending by one, if the third index is ascending by one as well
return true
otherwise return false;

Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

tripleUp([1, 4, 5, 6, 2]) → true
tripleUp([1, 2, 3]) → true
tripleUp([1, 2, 4]) → false
*/

function tripleUp(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] + 1 == arr[i + 1]) {
      if (arr[i + 1] + 1 == arr[i + 2]) {
        return true;
      }
    }
  }
  return false;
}
console.log(tripleUp([1, 4, 5, 6, 2]));

/*
Goal: gvien a start and end number return a new array; a length of 0 is valid
Params: num1: a, num2: b;
Return Val: array;
Logic: 
make an empty array;
loop starting at num1 and ending at num 2 incrementing by one;
push each number to a new array;
return array;

Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number. Note that a length-0 array is valid. (See also: FizzBuzz Code)

fizzArray3(5, 10) → [5, 6, 7, 8, 9]
fizzArray3(11, 18) → [11, 12, 13, 14, 15, 16, 17]
fizzArray3(1, 3) → [1, 2]
*/

function fizzArray3(a, b) {
  let array = [];
  for (i = a; i < b; i++) {
    array.push(i);
  }
  return array;
}

console.log(fizzArray3(11, 18));

/*
Goal:return an array that is shifted left by one. first index goes to end;
Params: array: arr;
Return Val: array;
Logic:
if array is empty return 0;
store first index in variable
initiate new array
loop over argument and push each index to new array
return new array with first index added to end.

Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.

shiftLeft([6, 2, 5, 3]) → [2, 5, 3, 6]
shiftLeft([1, 2]) → [2, 1]
shiftLeft([1]) → [1]
*/

function shiftLeft(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let first = arr.shift();
  let array = [];
  for (i = 0; i < arr.length; i++) {
    array.push(arr[i]);
  }
  return [...array, first];
}
console.log(shiftLeft([1]));

/*
Goal: loop over an array and change all indexes starting with multiple of 10 to that number until another multiple of 10 is found;
Params: array: arr;
Return Val: array;
Logic:
loop over array;
if an index is % 10 == 0
 if the following index is not % 10 == 0 it becomes the index that was
return the array;

For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]
*/

function tenRun(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 10 == 0) {
      if (arr[i + 1] % 10 != 0) arr[i + 1] = arr[i];
    }
  }
  return arr;
}

console.log(tenRun([2, 10, 3, 4, 20, 5]));

/* 
Goal:return a new array with elements from original that came before the first '4'
Params: array: arr;
Return Val: array;
Logic:
loop over array;
while index is not equal to 4;
add each index to a new array;
return new array;

Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

pre4([1, 2, 4, 1]) → [1, 2]
pre4([3, 1, 4]) → [3, 1]
pre4([1, 4, 4]) → [1]
*/

function pre4(arr) {
  let upToFour = [];
  for (i = 0; i < arr.length; i++)
    while (i < arr.length - 1 && arr[i] !== 4) {
      upToFour.push(arr[i]);
      i++;
    }

  return upToFour;
}

console.log(pre4([1, 3, 4, 5]));

/* 
Goal:return a new array cotaining any elements that show up after 4;
Params: array; 
Return Val: array;
Logic:
loop over array backwards to find last 4
splice array from that index to end and return it

Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

post4([2, 4, 1, 2]) → [1, 2]
post4([4, 1, 4, 2]) → [2]
post4([4, 4, 1, 2, 3]) → [1, 2, 3]
*/

function post4(arr) {
  for (i = arr.length - 1; i > 0; i--) {
    if (arr[i] === 4) {
      return arr.splice(i + 1);
    }
  }
}

console.log(post4([2, 4, 1, 2]));

/* 
Goal: return an array where if a number(n) is between two others it is returned as the higher number along with the rest of the array.
Params: array: arr; int: n;
Return Val: array;
Logic:
loop over array;
 if an index is equal to n and the index before it is not undefined and the index after it is not undefined;
  if the index below n is > than the index after;
  replace the index of n with the index before it;
  otherwise replace it with the index after;
  return the array;

 an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.

notAlone([1, 2, 3], 2) → [1, 3, 3]
notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
notAlone([3, 4], 3) → [3, 4]
*/

function notAlone(arr, n) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == n && arr[i - 1] != undefined && arr[i + 1] != undefined) {
      if (arr[i - 1] > arr[i + 2]) {
        arr[i] = arr[i - 1];
      }
      arr[i] = arr[i + 1];
    }
  }
  return arr;
}

console.log(notAlone([1, 2, 3, 2, 5, 2], 2));

/* 
Goal: return an array that contains the same numbers as the given array but rearranged so all zeros are grouped at the beginning
Params: Araray: arr
Return Val: array;
Logic: 
initiate array for zeroes;
initiate array for other numbers;
loop over the array  ;
add all zeroes to an array ;
add all other numbers to an array;
return the arrays combined with zeros first;

Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

zeroFront([1, 0, 0, 1]) → [0, 0, 1, 1]
zeroFront([0, 1, 1, 0, 1]) → [0, 0, 1, 1, 1]
zeroFront([1, 0]) → [0, 1]
*/

function zeroFront(arr) {
  let zeroes = [];
  let numbers = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes.push(arr[i]);
    }
    if (arr[i] !== 0) {
      numbers.push(arr[i]);
    }
  }
  return [...zeroes, ...numbers];
}

console.log(zeroFront([1, 0]));

/* 
Goal: return an array where all 10s are removed. all elements are shifted left and end elements are replaced with 0's
Params: array: arr;
Return Val: array;
Logic:
initiate array zero
initiate array not10
loop over array
if an index is not 10
push to not10
if an index is 10
push a 0 to zero
return the combined arrays with zeroes at end

Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

withoutTen([1, 10, 10, 2]) → [1, 2, 0, 0]
withoutTen([10, 2, 10]) → [2, 0, 0]
withoutTen([1, 99, 10]) → [1, 99, 0]
*/

function withoutTen(arr) {
  let zero = [];
  let not10 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 10) {
      not10.push(arr[i]);
    }
    if (arr[i] == 10) {
      zero.push(0);
    }
  }
  return [...not10, ...zero];
}

console.log(withoutTen([1, 99, 10]));

/*
Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.

zeroMax([0, 5, 0, 3]) → [5, 5, 3, 3]
zeroMax([0, 4, 0, 3]) → [3, 4, 3, 3]
zeroMax([0, 1, 0]) → [1, 1, 0]
*/

function zeroMax(arr) {
  let max = 0;
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] % 2 == 1) {
      max = Math.max(max, arr[i]);
    }
    if (arr[i] == 0) {
      arr[i] = max;
    }
  }

  return arr;
}

console.log(zeroMax([0, 5, 0, 3]));
console.log(zeroMax([0, 4, 0, 3]));
console.log(zeroMax([0, 1, 0]));

  /* 
Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, or make a new array.


evenOdd([1, 0, 1, 0, 0, 1, 1]) → [0, 0, 0, 1, 1, 1, 1]
evenOdd([3, 3, 2]) → [2, 3, 3]
evenOdd([2, 2, 2]) → [2, 2, 2]
*/

function evenOdd(arr) {
  return arr.filter((num) => num % 2 == 0) + arr.filter((num) => num % 2 == 1);
}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));


/*This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. (See also: FizzBuzz Code.) Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new String[] array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". In Java, String.valueOf(xxx) will make the String form of an int or other type. This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.

fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
*/


function fizzBuzz(start, end) {
  let fizz = [];
  let word = "";
  for (let i = start; i < end; i++) {
    i % 3 === 0 && i % 5 === 0
      ? (word = "FizzBuzz")
      : i % 3 === 0
      ? (word = "Fizz")
      : i % 5 === 0
      ? (word = "Buzz")
      : (word = i);

    fizz.push(word);
  }
  return fizz;
}

console.log(fizzBuzz(1, 16));
