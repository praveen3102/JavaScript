console.log("VARIABLES");
console.log("TO DECLARE VARIABLE WE CAN USE let , var AND const KEYWORD")
console.log("JAVA SCRIPT IS CASE SENSITIVE LANGUAGE")



console.log("");
console.log("var");
console.log("");


var a = 9;          //VARIABLE DECLARATION
console.log(a);

var a = 12;          //VARIABLE RE - RECLARATION
console.log(a);

var b;
b = 21;             //VARIABLE ASSIGNMENT 
console.log(b);

b = 27;
console.log(b);       //VARIABLE RE - ASSIGNMENT


console.log("++++++++++++++++++++++++++++++++++");
console.log("var HAS GLOBAL SCOPE SO WE CAN RE-DECLARE AND RE-ASSIGNE VARIABLES");
console.log("++++++++++++++++++++++++++++++++++");
console.log("");
// console.log("USE let AND const");

//------------------------------------------------------------------------------



console.log("");
console.log("let");
console.log("");

let c = 36;
console.log(c);  

// let c = 29;  FOR let RE - RECLARTION IS NOT ALLOWED

c = 39;
console.log(c);



{                                         //BLOCK
  let c = 45;
  console.log(c);

  c = 48;
  console.log(c);

  // let c = 52;   SAME BLOCK  NOT ALLOWED

}


console.log("++++++++++++++++++++++++++++++++++");
console.log("FOR let RE - RECLARTION IS NOT ALLOWED BUT WE CAN RE - ASSIGN");  
console.log("LET IS BLOCK SCOPE SO WE CAN RE - DECLARE AND RE - ASSIGN VARIABLE IN DIFFERNET BLOCK BUT NOT IN SAME BLOCK");
console.log("++++++++++++++++++++++++++++++++++");
console.log("");





//----------------------------------------------------------------------------





console.log("");
console.log("const");
console.log("");



const d = 54;
console.log(d); 

// const d = 69;   RE - RECLARTION IS NOT ALLOWED WITH const 

/* SEPERATE DECLARTION AND SEPERATE ASSIGNMENT IS NOT ALLOWED FOR const WE MUST HAVE TO ASSIGN ANY VALUE TO THE VARIABLE AT THE TIME OF DECLARTIING IT

const i;
i = 90;
THIS IS NOT ALLOWED
*/
 

{
  const d = 63;
  console.log(d); 
}


console.log("++++++++++++++++++++++++++++++++++");
console.log("FOR const RE - RECLARTION AND RE - ASSIGN BOTH ARE NOT ALLOWED AND ONE MORE IMPORTANT THING IS WE MUST HAVE TO ASSIGN ANY VALUE TO THE VARIABLE AT THE TIME OF DECLARTION IF WE USE const.");
console.log("const IS ALSO BLOCK SCOPE SO WE CAN RE - DECLARE VARIABLE IN DIFFERNET BLOCK BUT NOT IN SAME BLOCK");
console.log("++++++++++++++++++++++++++++++++++");
console.log("");
console.log("");
console.log("");





console.log("NOTE   -   DO NOT USE var BECUASE IT HAS GLOBAL SCOPE AND IT CAN BE RE DECLARE AS WELL AS RE ASIGN MAY BE IT CAN GENERATE SOME ERRORS AND BUGS SO ALWAYS USE let OR const.");


console.log("NOTE   -   THERE ARE SOME RULE TO DECLARE VARIBALE IN JAVA SCRIPT   <1> VARIBLE NAME MUST STARTS WITH EITHER LETTERS(a-z,A-Z), _ OR $.  <2> VARIABLE NAME CAN CONTAIN LETTERS (a-z,A-Z) , _ ,$ AND NUMBERS(0-9). <3> JS IS CASE SENSITVE LANGUAGE SO variable a AND varibale A ARE DIFFERNET.  <4> YOU CAN NOT GIVE VARIBLE NAME WHICH IS ALREADY A KEY WORD OR RESERVED WORD IN JS. FOR EX - let var = 9; BUT let VAR = 12; IS OK");

