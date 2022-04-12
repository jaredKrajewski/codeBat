/*
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!";

helloName("Bob") → "Hello Bob!"
helloName("Alice") → "Hello Alice!"
helloName("X") → "Hello X!"
*/

function helloName(name){
    console.log("hello " + name + "!")
  }
  
  helloName("Bob")

  // or 
  
  function helloName(name) {
    return `Hello ${name}!`;
  }
  
  console.log(helloName("Bob"));

  //////////////////////////////////////////////////////////

/*
Given two strings, a and b, return the result of putting them together 
in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi";

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/

  function makeAbba(a, b){
    return a + b + b+ a
  }
  
  console.log(makeAbba("Hi", "Bye"))

  //////////////////////////////////////////////////////////

/*
The web is built with HTML strings like "<i>Yay</i>" which draws Yay
 as italic text. In this example, the "i" tag makes <i> and </i> which 
 surround the word "Yay". Given tag and word strings, 
 create the HTML string with tags around the word, e.g. "<i>Yay</i>";

makeTags("i", "Yay") → "<i>Yay</i>"
makeTags("i", "Hello") → "<i>Hello</i>"
makeTags("cite", "Yay") → "<cite>Yay</cite>"
*/

function makeTags(a,b){
    return(`<${a}>${b}</${a}>`)
  }
  
  console.log(makeTags("i", "Yay"))

  //////////////////////////////////////////////////////////

/*
Given an "out" string length 4, such as "<<>>", and a word, return a new 
string where the word is in the middle of the out string, e.g.
 "<<word>>". Note: use str.substring(i, j) to extract the String 
 starting at index i and going up to but not including index j;

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]"
*/

function makeOutWord(a,b){
    return(a.substr(0, a.length - 2) + b + a.substr(2))
  }
  
  console.log(makeOutWord("[[]]", "word"))

  // or 

  function makeOutWord(a, b) {
    return a.substr(0, 2) + b + a.substr(a.length / 2);
  }
  
  console.log(makeOutWord("<<>>", "WooHoo"));

  //////////////////////////////////////////////////////////

/* 
Given a string, return a new string made of 3 copies of the last 2
 chars of the original string. The string length will be at least 2;

extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"
 */

function extraEnd(a){
    let lastTwo = a.substring(a.length -2)
    return (lastTwo + lastTwo + lastTwo)
  }
  
  console.log(extraEnd("Hello"))

  // or 

  function extraEnd(a) {
    return a.substr(-2).repeat(3);
  }
  
  console.log(extraEnd("Hello"));

  //////////////////////////////////////////////////////////

/*Given a string, return the string made of its first two chars,
   so the String "Hello" yields "He". If the string is shorter than 
   length 2, return whatever there is, so "X" yields "X", and the empty
   string "" yields the empty string "". Note that str.length() returns
   the length of a string;

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"
*/

function firstTwo(a){
    return a.substring(0,2)
  }
  
  console.log(firstTwo("Hello"))

  //////////////////////////////////////////////////////////

/*
Given a string of even length, return the first half. So the string
 "WooHoo" yields "Woo";

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/

function firstHalf(a){
  return(a.substr(0 , a.length/2))
}

console.log(firstHalf("WooHoo"))

//////////////////////////////////////////////////////////

/*
Given a string, return a version without the first and last char,
 so "Hello" yields "ell". The string length will be at least 2;

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"
*/

function withoutEnd(a) {
  return a.substr(1, a.length - 2);
}

console.log(withoutEnd("coding"));

//////////////////////////////////////////////////////////

/*
Given 2 strings, a and b, return a string of the form 
short+long+short, with the shorter string on the outside 
and the longer string on the inside. The strings will not be 
the same length, but they may be empty (length 0);

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"
*/

function comboString(a, b) {
  let aLength = a.length;
  let bLength = b.length;
  if (aLength > bLength) {
    return b + a + b;
  }
  return a + b + a;
}

console.log(comboString("hi", "Hello"));

// or 

function comboString(a, b) {
  let aLength = a.length;
  let bLength = b.length;
  return aLength > bLength ? b + a + b : a + b + a;
}
console.log(comboString("hi", "Hello"));

//////////////////////////////////////////////////////////

/*
Given 2 strings, return their concatenation, except omit the first 
char of each. The strings will be at least length 1;

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"
*/

function nonStart(a,b){
  let aWithoutFirst = a.substr(1);
  let bWithoutFirst = b.substr(1)
  return (aWithoutFirst + bWithoutFirst)
}

console.log(nonStart("Hello", "There"))

//////////////////////////////////////////////////////////

/*
Given a string, return a "rotated left 2" version where the first 
2 chars are moved to the end. The string length will be at least 2;

left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"
*/

function left2(a) {
  let firstTwoGone = a.substr(2);
  let firstTwoChars = a.substr(0, 2);
  return firstTwoGone + firstTwoChars;
}

console.log(left2("java"));

//////////////////////////////////////////////////////////

/*
Given a string, return a "rotated right 2" version where the last 
2 chars are moved to the start. The string length will be at least 2;

right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"
*/

function right2(x) {
  let lastTwoChars = x.substr(-2);
  let allButLastTwo = x.substr(0, x.length - 2);
  return lastTwoChars + allButLastTwo;
}

console.log(right2("java"));

//////////////////////////////////////////////////////////

/*
Given a string, return a string length 1 from its front, unless 
front is false, in which case return a string length 1 from its back.
The string will be non-empty;

theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"
*/

function theEnd(a, b) {
  if (b === true) {
    return a.substr(0, 1);
  } else return a.substr(- 1);
}

console.log(theEnd("Hello", false));

//////////////////////////////////////////////////////////

/*
Given a string, return a version without both the first and last
 char of the string. The string may be any length, including 0;

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/

function withoutEnd2(a){
  return a.substr(1,a.length-2)
}

console.log(withoutEnd2("ab"))

//////////////////////////////////////////////////////////

/*
Given a string of even length, return a string made of the middle two
chars, so the string "string" yields "ri". The string length will be
at least 2;

middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/

function middleTwo(str) {
  return str.substr(str.length / 2 - 1, 2);
}

console.log(middleTwo("practice"));

//////////////////////////////////////////////////////////

/*Given a string, return true if it ends in "ly";

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/

function endsLy(str){
  if (str.substr(str.length - 2, str.length - 1)  == 'ly' ){
    return true;
  }
  return false;
}

console.log(endsLy("y"))

// or 

function endsLy(str){
  return str.substr(-2)  == 'ly';
}

console.log(endsLy("oyly"))

//////////////////////////////////////////////////////////

/*
Given a string and an int n, return a string made of the first and 
last n chars from the string. The string length will be at least n;

nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"
*/

function nTwice(word, n) {
  return word.substr(0, n) + word.substr(- n);
}

console.log(nTwice("Chocolate", 3));

//////////////////////////////////////////////////////////

/*
Given a string and an index, return a string length 2 starting at 
the given index. If the index is too big or too small to define 
a string length 2, use the first 2 chars. The string length will
be at least 2;

twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"
*/

function twoChar(word, n) {
  if (word.length == n + 1 || n < 0) {
    return word.substr(0, 2);
  } else return word.substr(n, n + 2);
}

console.log(twoChar("java", 3));

// or 

function twoChar(word, n) {
  return n < 2 || n > 2 
    ? word.substr(0, 2) 
    : word.substr(n, 2);
}

console.log(twoChar("java", 2));

//////////////////////////////////////////////////////////

/*
Given a string of odd length, return the string length 3 from its 
middle, so "Candy" yields "and". The string length will be at least 3;

middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"
*/

function middleThree(word) {
  return word.substr(word.length / 2 - 1, +3);
}

console.log(middleThree("candy"));

//////////////////////////////////////////////////////////

/*
Given a string, return true if "bad" appears starting at index 0 or 1
in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx".
The string may be any length, including 0. Note: use .equals() 
to compare 2 strings;

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/

function hasBad(word) {
  if (word.substr(0, 3) === "bad" || word.substr(1, 3) === "bad") {
    return true;
  }
  return false;
}

console.log(hasBad("xxbadxx"));

//////////////////////////////////////////////////////////

/*
Given a string, return a string length 2 made of its first 2 chars.
 If the string length is less than 2, use '@' for the missing chars;

atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"
*/

function atFirst(word) {
  if (word.length >= 2) {
    return word.substr(0, 2);
  }
  return word.substr(0, 1) + "@";
}
console.log(atFirst("h"));

//////////////////////////////////////////////////////////

/*
Given 2 strings, a and b, return a new string made of the first char 
of a and the last char of b, so "yo" and "java" yields "ya". 
If either string is length 0, use '@' for its missing char;

lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/

function lastChars(a, b) {
  if (a.length === 0 && b.length === 0) {
    return "@@";
  }
  if (a.length === 0) {
    return "@" + b.substr(b.length - 1, 1);
  }
  if (b.length === 0) {
    return a.substr(0, 1) + "@";
  }

  return a.substr(0, 1) + b.substr(b.length - 1, 1);
}

console.log(lastChars("", "chars"));

/*
Goal:take two words and combine them, if a charachter is doubled(cc) during concatination omit one of the duplicates
Params: a: string 1, b: string 2
return Val: string
Logic: 
if: a strings last char is the same as b strings first char 
return: string a + string b starting at its 2nd char
otherwise: return string a and b

Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/

function conCat(a, b) {
  if (a.substr(a.length - 1, 1) === b[0]) {
    return a + b.substr(1);
  }
  return a + b;
}

console.log(conCat("abc", "efg"));

/*
Goal:take a string and return a string where the last 2 are reversed if there are enough chars
params:string: a
Return val: string of reversed letters
Logic: 
if: the string is less than 2 letters return false
otherwise:return the string minues the last two letters, add back the last, add back the first

Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"
*/

function lastTwo(a){
  if (a.length < 2){
    return false;
  } 
  return a.substr(0,a.length - 2) + a.substr(a.length-1,1) + a.substr(a.length -2, 1)
}

console.log(lastTwo("a"))

/*
Goaltake a string and if it begins with red or blue return the word or return an empty string
Params: string: a
Return Val: string
Logic: 
if: string begins with "red" return "red"
otherwise: if string begins with "blue" return "blue"

Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"
*/

function seeColor(a) {
  if (a.substr(0, 3) == "red") {
    return a.substr(0, 3);
  }
  if (a.substr(0, 4) == "blue") {
    return a.substr(0, 4);
  }
  return "";
}

console.log(seeColor("bluexxxred"));

/*
Goal:take a string if return true if the first 2 letters end the string
Params: string : a
Return Val: boolean
Logic: 
if: first two letters are equal to last two letters 
return true
otherwise return false

Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/

function frontAgain(a) {
  if (a.substr(0, 2) === a.substr(a.length - 2, 2)) {
    return true;
  }
  return false;
}

console.log(frontAgain("ed"));

/*
Goal: if one string is longer than the other cut it to the same length.
otherwise take 2 strings, combine them, return that result. 
Params:
  string a: a;
  string b: b;

Return Val:string
Logic:
if: string a is longer than string b
return: string a to the length of b + string b
else if: string a is shorter than string b
return: string a + string b to length of string a


Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

minCat("Hello", "Hi") → "loHi"
minCat("Hello", "java") → "ellojava"
minCat("java", "Hello") → "javaello"
*/

function minCat(a, b) {
  if (a.length > b.length) {
    return a.substr(a.length - b.length) + b;
  }
  if (a.length < b.length) {
    return a + b.substr(b.length - a.length);
  }
  return a + b;
}

console.log(minCat("java", "Hello"));

/*
Goal: take a word, return a new word made of 3 copies of the first 2 chars. if less than 2 use anything else x3
Params: string: a
Return Val: string of 3x first 2 chars or 3x first char
Logic:
if: string is longer than 1 char return first 2 chars x3
otherwise return 1st char 3 times

Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

extraFront("Hello") → "HeHeHe"
extraFront("ab") → "ababab"
extraFront("H") → "HHH"
*/

function extraFront(a) {
  if (a.length > 1) {
    return a.substr(0, 2).repeat(3);
  }
  return a.substr(0).repeat(3);
}

console.log(extraFront("H"));

/*
Goal: take a string if the first two and last two charsets are the same return a string without the first set.
Params: string 
Return Val: string
Logic:
if: string chars at 0 and 1st index are same as second to last and last return a string witout the first two indexes 
otherwise: return the string

Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*/

function without2(a) {
  if (a.substr(0, 2) === a.substr(a.length - 2, 2)) {
    return a.substr(2);
  }
  return a;
}

console.log(without2("He"));

/*
Goal: take a string and return it without its first 2 letters. keep the first one if it is 'a' and the second one if its 'b'
Params: string: a
Return Val: string without first 2 
Logic: 
if: letter at index one is b keep it and return the string, if the first letter is "a" keep it and return the rest of the string
otherwise: return the string without the first two letters

Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length.

deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/

function deFront(a) {
  if (a[1] == "b") {
    return a.substr(0);
  }
  if (a[0] == "a") {
    return a.substr(0, 1) + a.substr(2);
  }

  return a.substr(2);
}

console.log(deFront("away"));

/*
Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

startWord("hippo", "hi") → "hi"
startWord("hippo", "xip") → "hip"
startWord("hippo", "i") → "h
*/

function startWord(a, b) {
  if (a.length >= b.length) {
    return a.substr(0, b.length);
  }
  return a.substr(0, 1);
}

console.log(startWord("hippo", "hi"));

/*
Goal:take a string and if first and last chars are "x" return without both "x", otherwise return the string unchanged
Params:string: a
Return Val: string
Logic:
if string first char is equal to x and string last char is equal to x
return the string minus its first and last chars
if string first char is x remove
otherwise return the string

Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

withoutX("xHix") → "Hi"
withoutX("xHi") → "Hi"
withoutX("Hxix") → "Hxi"
*/

function withoutX(a) {
  if (a.substr(0, 1) == "x" && a.substr(a.length - 1) == "x") {
    a = a.substr(1, a.length - 2);
  }
  if (a.substr(0, 1) == "x") {
    a = a.substr(1);
  }
  if (a.substr(a.length - 1) == "x") {
    a = a.substr(0, a.length - 1);
  }
  return a;
}

console.log(withoutX("hxix"));

/*
Goal: take a string  if either or both of the first two chars are "x" return the string without any found "x" otherwise return the string
Params: string
Return Val: modified string
Logic: 
if both chars are x 
return string without both chars
if the second char is x 
return the string without the second char
if the first char is x
return the string without the second char

Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. 

withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*/

function withoutX2(a) {
  if (a[0] === "x" && a[1] === "x") {
    return a.substr(2);
  }
  if (a[1] === "x") {
    return a.substr(0, 1) + a.substr(2);
  }
  if (a[0] === "x") {
    return a.substr(1);
  }
  return a;
}
console.log(withoutX2("hxi"));

//////////////////////////////////////////////////////////
/* END OF CODINGBAT STRING 1 IN JAVASCRIPT */
//////////////////////////////////////////////////////////


