/*
    JavaScript Operators :---
  
    1. Assignment Operators :---
               example :
                           =
      
    2. Arithmatic Operators :--
              example :
                          + , - , * ,/ , %

    3. Short hand Math Operators :--
             example :
                        +=, -= , *= , /= 

    4.Conditional Operators :--
           example :
                       < , > , <= , >= ,!== 
     
    5.Unary Operators :--
            example :
                        ++ , --

    6.Logical Operators :-
             example :  
                           && , || , ^
      
    7.Ternary Operators :-
            example :
                       ?:

    8.Equality Operators :-
           example :
                       === , ==


*/

// Assignment Operators :

   let test = 10 ;
   console.log(test);

 // Arithmetic Operators :
 
 let num1 = 10 ;
 let num2 = 20 ;
 console.log(`sum is ${num1 + num2}`);
 console.log(`sum is ${num1 - num2}`);
 console.log(`sum is ${num1 * num2}`);
 console.log(`sum is ${num1 / num2}`);

    //find the number is even or odd ?
  
 let number = 12 ; 
 if(number % 2 === 0){
    console.log(`${number} is even number`);
 }
 else{
    console.log(`${number} is odd number`);
 }


 //short hand math operators

 let a = 20 ;
 let b = 30 ;
 let add = 0 ;
 add = add + (a + b);
 add +=(a+b);
 console.log(add);

 let a1 = 20 ;
 let b2 = 30 ;
 let add1 = 0 ;
 add1 = add1 - (a + b);
 add -=(a+b);
 console.log(add);

// conditional Operator 

let marks = 40 ;
if(marks <=35){
    console.log(`result is failed`);
}
else {
    console.log(`result is pass`);
}


// unary operator 

let x = 10 ;
 x = x + 1 ;
 x++;
 console.log(x); 

 //logical operator 

 let inRelationship = true ;
 let parentAgreed = false ;

 if(inRelationship && parentAgreed){
            console.log('get marry soon');
 }
 else{
        console.log('wait parent until agreed');
 }

 // ternary operator : ( ? :)

  /*
    synatx : (condition) ? true : false ;
  */

    let m = 65;
    let message = ' ';
    (m <= 35) ? message = 'you failed the exam' : message = 'you cleared the exam' ;
    console.log(message);

   // Equality Operator
   
   
   let h = 10;
   let g=  '30';
   if(h===g){
    console.log('value is equal');
   }
   else{
    console.log('value is dont equal');
   }
