/* 
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

countYZ("fez day") → 2
countYZ("day fez") → 2
countYZ("day fyyyz") → 2
*/

function countYZ(str) {
    let count = 0 ;
    let words = str.split(" ");
    words.forEach((n, i) => {
      n.charAt(n.length - 1) == "y"
        ? count ++
        : n.charAt(n.length - 1 == "z")
        ? count ++
        : null;
    });
    return count;
  }
  console.log(countYZ("fez day"));

  // || 

  function countYZ(str) {
    let count = 0;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].slice(-1) == "z" || words[i].slice(-1) == "y") {
        count++;
      }
    }
    return count;
  }
  console.log(countYZ("fez day"));

  /*
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

withoutString("Hello there", "llo") → "He there"
withoutString("Hello there", "e") → "Hllo thr"
withoutString("Hello there", "x") → "Hello there"
*/ 

function withoutString(base, remove) {
    return base.replaceAll(remove, "");
  }
  
  console.log(withoutString("Hello there", "e"));

  /*
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

equalIsNot("This is not") → false
equalIsNot("This is notnot") → true
equalIsNot("noisxxnotyynotxisi") → true
*/ 

function equalIsNot(str) {
    let notCount = 0;
    let isCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 2) == "is") {
        isCount++;
      }
      if (str.substr(i, 3) == "not") {
        notCount++;
      }
    }
    return notCount == isCount ? true : false;
  }
  
  console.log(equalIsNot("This is notnot"));

  /*
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

gHappy("xxggxx") → true
gHappy("xxgxx") → false
gHappy("xxggyygxx") → false
*/      