/*When squirrels get together for a party, they like to have cigars. 
A squirrel party is successful when the number of cigars is between 40 and 60,
 inclusive. Unless it is the weekend, in which case there is no upper bound on 
 the number of cigars. Return true if the party with the given values is successful, or false otherwise. 


cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true */

/* Goal: check true/false if number is between 40 & 60 unless it is the weekend where number minimum of 40 is required only
Params: number, boolean (n, bool)
Return value: true/false
Logic: 
  - If cigars between 40 & 60
    - return true
  - If cigars greater than 40 and weekend is true 
    - return true
  - otherwise
    - return false
  */
    function cigarParty(cigars, weekend) {
        if (cigars >= 40 && cigars <= 60) {
          return true;
        } else if ((cigars >= 40 && weekend == true)) {
          return true;
        }
      }
      return false;
      
      console.log(cigarParty(70, true));

/* You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of
 your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes.
  The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. 
  If either of you is very stylish, 8 or more, then the result is 2 (yes). 
  With the exception that if either of you has style of 2 or less, then the result is 0 (no). 
  Otherwise the result is 1 (maybe).


dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1 */ 

/* Goal: determine on a score 0 = no, 1 = maybe, 2 = yes if you will get a table
Params: your style, dates style (0-10) (you, date)
Return value: 0-2 as int
Logi:
 -if you or date style is >= 8 and you or date style >= 2 
  - return 2
 -if you or date style <= 2
  - return 0
 - otherwise
  - return 1   */

  function dateFashion(date, you){
    if ( you > 2 && date > 2 && you >= 8 || date >=8){
      return 2
      
    } else if (you <= 2 || date <= 2){
      return 0
    }
    return 1
  }
  
  console.log(dateFashion(4,4))


/* 

The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). 
Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, 
return true if the squirrels play and false otherwise.


squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true

*/
/* 
Goal: taking in temperature(60-90 inclusive or 100 during summer)  determine boolean is squirrels play
Params: temp, isSummer(boolean)
Return Val: true/false
Logic: 
if - temp 60-90 
   - return true
if - temp >90 && isSummer = false
   - return false
if - temp <= 100 && isSummer = true 
   - return true



*/


function squirrelPlay(temp, isSummer){
  if(temp >= 60 && temp <= 90){
    return true
  } else if (temp >= 90 && isSummer == false){
    return false
    } else if (temp <= 100 && isSummer == true){
    return true
  }
  return false
}


console.log(squirrelPlay(95, true))



