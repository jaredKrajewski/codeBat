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

  /*
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

xyzThere("abcxyz") → true
xyzThere("abc.xyz") → false
xyzThere("xyz.abc") → true
*/

function xyzThere(str) {
    let answer = false;
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 3) === "xyz" && str.substr(i - 1, 1) !== ".") {
        answer = true;
      }
    }
    return answer;
  }
  console.log(xyzThere("abc.xyz"));
  
/*
Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

bobThere("abcbob") → true
bobThere("b9b") → true
bobThere("bac") → false
*/

function bobThere(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 1) === "b" && str.substr(i + 2, 1) === "b") {
        return true;
      }
    }
    return false;
  }
  
  console.log(bobThere("b9b"));
  
/*
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

xyBalance("aaxbby") → true
xyBalance("aaxbb") → false
xyBalance("yaaxbb") → false
*/

function xyBalance(str) {
  let xIndex;
  let yIndex;

  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, 1) == "x") {
      xIndex = i;
    }
    if (str.substr(i, 1) == "y") {
      yIndex = i;
    }
  }
  return xIndex < yIndex ? true : false;
}

console.log(xyBalance("yaaxbb"));

/*
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"
*/

function mixString(strA, strB) {
  let length = Math.max(strA.length, strB.length);
  let word = "";
  for (let i = 0; i < length; i++) {
    word += strA.charAt(i) + strB.charAt(i);
  }
  return word;
}

console.log(mixString("hi", "There"));

/*
Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

repeatEnd("Hello", 3) → "llollollo"
repeatEnd("Hello", 2) → "lolo"
repeatEnd("Hello", 1) → "o"
*/

function repeatEnd(str, n) {
  return str.substr(-n).repeat(n);
}
console.log(repeatEnd("Hello", 3));

/*
Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

repeatFront("Chocolate", 4) → "ChocChoChC"
repeatFront("Chocolate", 3) → "ChoChC"
repeatFront("Ice Cream", 2) → "IcI"
*/

function repeatFront(str, n) {
  let word = "";
  for (let i = n; i > 0; i--) {
    word += str.substr(0, i);
  }

  return word;
}
console.log(repeatFront("Chocolate", 4));


