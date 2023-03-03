/*
    var ----> ES5
    let ----> keyword to decleared the variable.
    a ----> varibale name / reference varibale.
    = ---> assignment operator
    ; ---> end of the statement.

*/


let a=100;
let b=200;
let sum= a + b; 
console.info('the sum is' + a + ' , ' + b + 'is :'+sum); //ES5

// ES6 ---> Template String / Template Literals (``) back tick  

console.log(`The sum is ${a} , ${b} is : ${sum}`); //ES6


let name = 'chetan' ;
name = 'kamble';
console.log(name); // kamble (data override)


//Rules of Declaring Variable
/*

1. All variable are case sensitive
    Example :--
      let name='Naveen';
      console.log(Name); 

2. All variable are in camelCase
     Example :--
      let myEmpName = 'John';
      console.log(myEmpName);

3. max allow char 15

4. chars allowed are  a-z,A-Z,$,_,0-9
    Example:--
      let number  = 10 ;  // valid
      let $number = 10 ;  // valid
      let _number = 10 ;  // valid
      let 1number = 10 ;  // not valid(bcz variable not start with number )
      let #number ='John' ;  // not valid
         
5. variable cannot be re-declared
    Example:--
        let name = 'Chetan';
        let name = 'kamble';
        console.log(name); // error variable cannot be re decleared.
                             Uncaught SyntaxError: Identifier 'name' has already been declared.


*/

