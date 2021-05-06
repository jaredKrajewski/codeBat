/*Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

factorial(1) → 1
factorial(2) → 2
factorial(3) → 6*/

function fact(n){
    if (n > 1){
      return n * fact(n -1)
    }
   return 1
  }
  
  console.log(fact(3))

/* We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4 */

function bunnies(n) {
  if (n == 0) {
    return 0;
  }
  if (n >= 1) {
    return 2 + bunnies(n - 1);
  }
}

console.log(bunnies());


/* The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

fibonacci(0) → 0
fibonacci(1) → 1
fibonacci(2) → 1 */

function fib(n){
  if (n == 0){
  return 0
  } if (n == 1){
    return 1
    
  } if (n >=2){
    return fib(n - 1) + fib(n - 2) 
  }
}

console.log(fib(5))

/*We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).


bunnyEars2(0) → 0
bunnyEars2(1) → 2
bunnyEars2(2) → 5 */

function bunnyEars2(n) {
  if (n == 0){
    return 0
  } if ( n % 2 == 0){
    return 2 + bunnyEars2(n - 1)
  } if ( n % 2 == 1){
    return 3 + bunnyEars2(n - 1)
  }
}

console.log(bunnyEars2(2));

/*
We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

triangle(0) → 0
triangle(1) → 1
triangle(2) → 3 */

function triangle(n){
  if (n === 0){
    return 0
  }
  if (n >= 1){
    return n + triangle(n - 1)
  }
}

console.log(triangle(1))

/*Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3 */

function sumDigits(n) {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(126)); 

/* Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

count7(717) → 2
count7(7) → 1
count7(123) → 0 */

function count7(n){
  let count = 0;
  if ( n == 0 ){
    return count
  } if (n %10 == 7){
    count++
  }
  return count + count7(Math.floor (n/10))
}

console.log(count7(7177))

/*Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

count8(8) → 1
count8(818) → 2
count8(8818) → 4
NOT WORKING*/

function count8(n) {
  let count = 0
  if (n == 0) {
    return 0;
  }
  if (n % 10 == 8) {
    count += 1 + count8(n / 10);
    if (n % 10 == 8) {
      count +=2 + count8(n / 10);
    }
  }
  return count + (count8(n/10))
}

console.log(count8(8818));

/*
Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

powerN(3, 1) → 3
powerN(3, 2) → 9
powerN(3, 3) → 27*/

function powerN(b, n) {
  if (n == 0) {
    return 1;
  }
  if (n >= 1) {
    return b * powerN(b, n - 1);
  }
}

console.log(powerN(3, 3));

/* Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0 */

function countX(str) {
  if (str == "") {
    return 0;
  }
  if (str.charAt(0) == "x") {
    return 1 + countX(str.substr(1));
  } else {
    return countX(str.substr(1));
  }
}

console.log(countX("xxhixxxx"));

/*
Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.

countHi("xxhixx") → 1
countHi("xhixhix") → 2
countHi("hi") → 1 */

function countHi(str) {
  if (str == "") {
    return 0;
  } else if (str.substr(0, 2) == "hi") {
    return 1 + countHi(str.substr(2));
  } else {
    return countHi(str.substr(1));
  }
}

console.log(countHi("xhixhixhi"));

/*Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.


changeXY("codex") → "codey"
changeXY("xxhixx") → "2yhiyy"
changeXY("xhixhix") → "yhiyhiy" */

function changeXY(str) {
  if (str == "") {
    return "";
  } else if (str.substr(0, 1) == "x") {
    return "y" + changeXY(str.substr(1));
  } else {
    return str[0] + changeXY(str.substr(1));
  }
}

console.log(changeXY("codex"));

/*Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".


changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p" */

function changePi(str) {
  if (str == "") {
    return "";
  } else if (str.substr(0, 2) == "pi") {
    //
    return "3.14" + changePi(str.substr(2));
  } else {
    return str[0] + changePi(str.substr(1));
  }
}

console.log(changePi("any pi is a good pi"));

/*
Given a string, compute recursively a new string where all the 'x' chars have been removed.

noX("xaxb") → "ab"
noX("abc") → "abc"
noX("xx") → "" */

function noX(str) {
  if (str == "") {
    return "";
  } else if (str.substr(0, 1) == "x") {
    return noX(str.substr(1));
  } else return str[0] + noX(str.substr(1));
}

console.log(noX("xxxxx"));


/* Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

array6([1, 6, 4], 0) → true
array6([1, 4], 0) → false
array6([6], 0) → true */

function array6(arr, num) {
  if (arr.length == 0) {
    return false;
  } else if (arr[num] == 6) {
    return true;
  } else return array6(arr, num + 1);
}

console.log(array6([1, 6, 4], 0));

/* Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.


array11([1, 2, 11], 0) → 1
array11([11, 11], 0) → 2
array11([1, 2, 3, 4], 0) → 0 */ 


/*
  Goal: Recursively count occurences of 11 in array
  Params: array, index (Array, Number)
  Return value: Count of occurences (Number)
  Logic:
    - Define base case  whereby index >= array.length
      - return 0
    - How do we know if we have a "hit"?
      - If the current index that was just passed is equal to 11
        - When using it to index into array
      - Remember, we are doing it recursively:
        - Do 1 + next recursive call
          - Increment next index on next recursive call
    - What is the default case?
      - Just return the next recursive call
        - Increment index

*/

function array11(arr, num){
  if (num >= arr.length){
    return 0
  } else if (arr[num] == 11){
    return 1 + array11(arr, num + 1)
  } else 
  return array11(arr, num + 1)  
}

console.log(array11([11, 11], 0))

/*
Given an array of ints, compute recursively if the array contains somewhere a value followed
 in the array by that value times 10. We'll use the convention of considering only the 
 part of the array that begins at the given index. In this way, a recursive call can pass 
 index+1 to move down the array. The initial call will pass in index as 0.


array220([1, 2, 20], 0) → true
array220([3, 30], 0) → true
array220([3], 0) → false */ 

/* Goal: given an array, find if the following index is the result of the previous index * 10
Params: array, index
Return val: true/false
Logic: 
 - define base case where if index is less than size of array;
  - return false
 - Determine if the position following current index is the current index value * 10 
  - if so return true
 - using recursion check the next index in the array */

 function array220(arr, i) {
  if (i >= arr.length - 1) {
    return false;
  } else if (arr[i + 1] == arr[i] * 10) {
    return true;
  }
  return array220(arr, i + 1);
}

console.log(array220([1, 2, 20], 0));

/* 
Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".


allStar("hello") → "h*e*l*l*o"
allStar("abc") → "a*b*c"
allStar("ab") → "a*b" */

/* Goal: recursively take a string and return a new string with each letter separated by a "*"
Params: string (str)
Return value: string split by '*'
Logic: 
-Base case where if str is 1 char or less
 - return str
-create a new string and return a letter from str followed by "*" */

function allStar(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.charAt(0) + "*" + allStar(str.substr(1));
}

console.log(allStar("hello"));

/*Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".


pairStar("hello") → "hel*lo"
pairStar("xxyy") → "x*xy*y"
pairStar("aaaa") → "a*a*a*a" */ 

/* Goal: recursively take a string and separate all adjacent identical characters by '*'
Params: string (str)
 Return Val: string 
 Logic:
 - base case where str is 1 char or less
  - return string
 - if string char at index 0 is equal to string char at index 1
  -return string with "*" following first index of matching charachters
- return first charachter and call function at next index of string. 
 */

function pairStar(str) {
  if (str.length <= 1) {
    return str;
  } else if (str.charAt(0) == str.charAt(1)) {
    return str.charAt(0) + "*" + pairStar(str.substring(1));
  } else return str.charAt(0) + pairStar(str.substring(1));
}

console.log(pairStar("hello"));

/* Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.


endX("xxre") → "rexx"
endX("xxhixx") → "hixxxx"
endX("xhixhix") → "hihixxx" */
/* Goal:using recursion return a string where all lowercase "x" charachters are moved to the end of the string.
Params:string (str)
Return Val: string
Logic:
-create an empty string
 -if string.length is less than 1
  - return string
if str.charat 0 is 'x' 
 -call function at next charachter in string + 'x'
- otherwise
 - return char at 0 + recursively call for the next charachter */

 function endX(str) {
  if (str.length <= 1) {
    return str;
  } else if (str.charAt(0) == "x") {
    return endX(str.substring(1)) + "x";
  } else {
    return str.charAt(0) + endX(str.substring(1));
  }
}

console.log(endX("xhixhix"));

/* We'll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.


countPairs("axa") → 1
countPairs("axax") → 2
countPairs("axbx") → 1 */ 

/* Goal: recursively check a string for pairs of letters separated by one charachter within a string, pairs can overlap (axaxa provides 3 counts, 2 for 'x' and one for 'x')
Params: string (str)
Return Val: int
Logic: 
if string length is <=2
 - return 0 
if string char at 0 = string chat at 2
 - count = 1 call function + 1 index
 if string chat at 1 = to string char at 3
 - count = 1 call function + 1 index */

 function countPairs(str) {
  if (str.length <= 2) {
    return 0;
  } else if (str.charAt(0) == str.charAt(2)) {
    return 1 + countPairs(str.substring(1));
  } else {
    return countPairs(str.substring(1));
  }
}

console.log(countPairs("axax"));

/*  Count recursively the total number of "abc" and "aba" substrings that appear in the given string.


countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2 */ 

/* Goal: recursively count the number of "abc" and "aba" substrings in a given string
Params: string (str)
Return Val: int 
Logic:
if the string is less than 3 chars
 - return 0
if str.substring(0, 2) is equal to "abc" or "aba"
 - count + 1 + recall function at next substring location
otherwise
 - count unchanged + recall function at next substring location */

 function countAbc(str) {
  if (str.length < 3) {
    return 0;
  } else if (str.substr(0, 3) === "abc" || str.substr(0, 3) === "aba") {
    return 1 + countAbc(str.substring(1));
  } else {
    return countAbc(str.substring(1));
  }
}

console.log(countAbc("abaxxaba"));


/*
Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.


count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1 */
/* Goal: take a string and recurisveily count through to find the number of '11' substrings, they can not overlap; Ie('111' = "11" returning 1 count)
Params:string (str)
Return Val: int
Logic: 
if string is less than 2
 count == 0
  Check if charachtter at substrting and folloiwng index is equal to ==
   - return 1 for count and check next position on index +2 
 otherwise 
 - return function on sel and check next index in string
*/

function count11(str) {
  if (str.length < 2) {
    return 0;
  } else if (str.substring(0, 2) == "11") {
    return 1 + count11(str.substring(2));
  } else {
    return count11(str.substring(1));
  }
}

console.log(count11("11abc1111"));


/* Goal: take a string and remove charachters that are identical and in a row using recursion
Param: string (str)
Return Val: string 
Logic:
if string length is < 2 
 -return the string
if string charAt 0  is equal to string charAt 1
 -return function at substring 1 leaving behind the first duplicate char
 else 
  - return the 0th indexed char and call the function leaving the first charachter in the string
 */

  function stringClean(str) {
    if (str.length < 2) {
      return str;
    } else if (str.charAt(0) == str.charAt(1)) {
      return stringClean(str.substring(1));
    }
    return str.charAt(0) + stringClean(str.substring(1));
  }
  
  console.log(stringClean("yyyzzzaaaaaaa"));

  