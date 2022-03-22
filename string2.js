/*
Given a string, return a string where for every char in the original, there are two chars.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree
*/

function doubleChar(str) {
    return str
      .split("")
      .map((a) => a + a)
      .join("");
  }
  
  console.log(doubleChar("hi-there"));
  
/*Return the number of times that the string "hi" appears anywhere in the given string.


countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2
*/

function countHi(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 2) == "hi") {
        count++;
      }
    }
    return count;
  }
  
  console.log(countHi("abc hi ho"));
  
  /*
Return true if the string "cat" and "dog" appear the same number of times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true
*/

function catDog(str) {
    let cats = 0;
    let dogs = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 3) === "cat") {
        cats++;
      }
      if (str.substr(i, 3) === "dog") {
        dogs++;
      }
    }
    if (cats > 0 && cats === dogs) {
      return true;
    }
    return false;
  }
  
  console.log(catDog("catcatdog"));

  /*
Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

countCode("aaacodebbb") → 1
countCode("codexxcode") → 2
countCode("cozexxcope") → 2
*/

function countCode(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 2) == "co" && str.substr(i + 3, 1) === "e") {
        count++;
      }
    }
    return count;
  }
  
  console.log(countCode("cozexxcope"));

  /*
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

endOther("Hiabc", "abc") → true
endOther("AbC", "HiaBc") → true
endOther("abc", "abXabc") → true
*/

function endOther(strA, strB) {
    return strA.substr(-strB.length) ? true : false;
  }
  
  console.log(endOther("abc", "abXabc"));
  
