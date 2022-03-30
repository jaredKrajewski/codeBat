/*
Given a string and a non-negative int n, return a larger string that is n copies of the original string.
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi" 
*/

function stringTimes(str, n){
    return str.repeat(n)
  }
  console.log(stringTimes("Hi", 2))

/*
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;
frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc" 
*/

function frontTimes(str, n){
    return str.substr(0,3).repeat(n)
    
  }
  
  console.log(frontTimes("Chocolate", 2))

/*
  Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3 
*/

function countXX(str) {
    let count = 0;
    for (i = 0; i < str.length ; i++){
  if (str.substr(i, + 2) == "xx")
    count++
  }
    return count
  }
  
  console.log(countXX("abcxx"))

/*
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".
doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true 
*/

function doubleX(str){
    for (i = 0; i < str.length; i++){
      if(str.substr(i , i + 1) == 'xx')
        return true;
      }
     return false;
   }
   
   console.log(doubleX("axxbb"))



/*
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello" 
*/

function stringBits(str){
    let result = "";
    for (i = 0; i < str.length; i += 2){
      result += str.charAt(i, i + 2)
    }
    return result;
  }
  
  console.log(stringBits("heeololeo"))

/*
Given a non-empty string like "Code" return a string like "CCoCodCode".
stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab" 
*/

function stringSplosion(str) {
    let result = ""
    for (i = 0; i < str.length; i++){
      result += str.substr(0, i + 1)
    }
    return result
  }
  
  console.log(stringSplosion("Code"))

/*
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).
last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2 
*/

function last2(str) {
  let result = 0;
  let last = str.substr(str.length - 2)
  for (i = 0; i < str.length ; i++)
    if (str.substr(i, i + 1) == last){
     result++
    }
  return result
}

console.log(last2("xaxxaxaxx"))

/*
Given an array of ints, return the number of 9's in the array.
arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3 
*/

function arrayCount9(arr) {
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 9) count++;
  }
  return count;
}
console.log(arrayCount9([1, 9, 9, 3, 9]));

/* 
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false 
*/

function arrayFront9(arr){
  let end = arr.length;
  if (end > 4, end = 4);
  for (i = 0; i < end; i ++)
    if(arr[i] == 9){
      return true;
    } 
  return false;
}

console.log(arrayFront9([1, 2, 2, 3, 9]))

/* 
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true 
*/

function array123(arr) {
  for (i = 0; i < arr.length - 2; i++)
    if (arr[i] == 1 && arr[i + 1] == 2 && arr[i + 2] == 3) {
      return true;
    }
  return false;
}

console.log(array123([1, 3, 1, 2, 3]));

/* 
Goal: return a count of times two conescutive chars match between two strings
params: string 1: a, string 2: b
Return val: int (count of 2 consec chars between both strings)
Logic: 

Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.
stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0 
*/ 

function stringMatch(a, b) {
    let count = 0;
    let length = Math.min(a.length, b.length);
  
    for (i = 0; i < length - 1; i++) {
      if (a.substr(i, 2) == b.substr(i, 2)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(stringMatch("xxcaazz", "xxbaaz"));

  /*
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/

  function stringX(str) {
    let string = [...str];
    for (let i = 1; i < string.length - 1; i++) {
      if (string[i] === "x") {
        string.splice(i, 1);
        i--;
      }
    }
  
    return string.join("");
  }
  console.log(stringX("xxHxix"));
  
/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
*/

function altPairs(str) {
  let string = "";

  for (let i = 0; i < str.length; i++) {
    string += str[i];
    if (i % 2 != 0) i += 2;
  }

  return string;
}

console.log(altPairs("CodingHorror"));

/*
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

stringYak("yakpak") → "pak"
stringYak("pakyak") → "pak"
stringYak("yak123ya") → "123ya"
*/

function stringYak(str) {
  let string = str.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "y" && string[i + 2] == "k") {
      string.splice(i, 3);
    }
  }
  return string.join("");
}

console.log(stringYak("yak123ya"));

/*
Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1
*/

function array667(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == 6 && arr[i + 1] === 6) || arr[i + 1] === 7) {
      count++;
    }
  }
  return count;
}
console.log(array667([6, 7, 2, 6]));

/*
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/

function noTriples(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return false;
    }
  }
  return true;
}
console.log(noTriples([1, 1, 1, 2, 2, 2, 1]));

