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
        return false;
      }
      
      console.log(cigarParty(70, true));

/* You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).


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
  - return 1    FIX THIS*/

  function dateFashion(date, you){
    if (you >= 8 || date >=8 && (you > 2 && date >2)){
      return 2
      
    } else if (you <= 2 || date <= 2){
      return 0
    }
    return 1
  }
  
  console.log(dateFashion(5, 10))
  