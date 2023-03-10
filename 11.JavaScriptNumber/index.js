//Number object
/*
var a=10;
var b=10.45;
var c=5e3;
var d=34e-5;
var x=new Number(100);
var y="200";
var z=new Number("300");
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));
*/


 // Number with String
   /*
    var a = "50";      // String
    var b = 10;        // Number
    var c = 20;        // Number
    var d = "Hello";   // String
    console.log(a+b);   //5010
    console.log(a-b);    //40
    console.log(b+c+a);   //3050
    console.log(a+b+c);   //501020
    var x="Result :"+b+c;  //1020
    console.log(x);
    console.log(d-b);      //NAN
    console.log(a-d);      //NAN
    console.log(a-b);      //40
    console.log(b-a);      //-40
*/

// NAN (Not a number)
   /*
    var a = "50";      // String
    var b = 10;        // Number
    var c = 20;        // Number
    var d = "Hello";   // String
    console.log(a/b);   //5
    console.log(b/a);   //0.2
    console.log(a/d);   //Nan
    console.log(d/a);   //Nan 
   */

// Nan (not a number is not equal to eveything)
  /*
    var a = "Hello";
    console.log(isNaN(a)); //true
    var b= 20;
    console.log(isNaN(b));   //false
*/

// Infinity and - Infinity

   /*
    var a = 5 ;
    console.log(a/0);  //Infinity
    console.log(-a/0); // -inifinity
  */

 // toString():--- convert the Number into String
    /*
     var a = 10;
     console.log('the type of a is :'+typeof(a));   //Number
     console.log(typeof(a.toString()));  //String
   */

   // toExponential():--- convert the number into Exponential.
      /*   
        var a = 58975.98745;
        console.log(a.toExponential());         //5.897598745e+4
        console.log(a.toExponential(2));        //5.90e+4
        console.log(a.toExponential(4));        //5.8976e+4
     */

    // tofixed() :----convert the number into string keeping specified number of decimal also it round the decimal.
            /*
                var a = 19.65823;
                console.log(a.toFixed());  //20
                console.log(a.toFixed(2));  //19.66
                console.log(a.toFixed(4));  //19.6582
                console.log(a.toFixed(8));  //19.65823000
            */

     //toPrecision() :---
                    /*
                        var a = 19.65823;
                        console.log(a.toPrecision());  //19.65823
                        console.log(a.toPrecision(2));  //20
                        console.log(a.toPrecision(4));  //19.66
                        console.log(a.toPrecision(9));   //19.6582300
                     */

       // Number.isInteger() :---  chck wheter the value is interger or not.
            /*
                  console.log(Number.isInteger());     //false
                  console.log(Number.isInteger(100));  //true
                  console.log(Number.isInteger(-100));  //true
                  console.log(Number.isInteger(100.45)); //false
                  console.log(Number.isInteger(200-100)); //true
                  console.log(Number.isInteger(0.1));      //false
                  console.log(Number.isInteger("100"));    //false
                  console.log(Number.isInteger("Hello"));  //false
            */

        //Number.isSafeInteger() :---chck whether the value is safe integer ornot
                                     //(2^53-1) to (2^53-1)
                /*                     
                          console.log(Number.isSafeInteger(100));   //true            
                          console.log(Number.isSafeInteger(10.5));  //false
                          console.log(Number.isSafeInteger(10000000000016514641316+41303210));  //false
                 */

            //Global Js Method : 1. Number() 2.parseInt() 3.parseFloat()
            
                 //1. Number() :-- Number() function convert the object argument to Number.
                     /*
                        console.log(Number(true));   //true
                        console.log(Number(false));  //0
                        console.log(Number(100));     //100
                        console.log(Number("100"));   //100
                        console.log(Number("Hello"));  //NaN
                     */
                 //2. parseInt() :-- parse a string and return integer
                         /*
                         console.log(parseInt("100"));  //100
                         console.log(parseInt("12.00")); //12
                         console.log(parseInt("15.45"));  //15
                         console.log(parseInt("10 20 30")); //10
                         console.log(parseInt(" 90 "));     //90
                         console.log(parseInt("10 years"));  //10
                         console.log(parseInt("year10"));    //Nan
                        */
                   //3.parseFloar() :-- parse a string and return float

                         console.log(parseFloat("100"));  //100
                         console.log(parseFloat("12.00"));  //12
                         console.log(parseFloat("15.45"));  //15.45
                         console.log(parseFloat("10 20 30"));  //10
                         console.log(parseFloat(" 90 "));  //90
                         console.log(parseFloat("10 years"));  //10
                         console.log(parseFloat("years10"));  //NaN





                         
     






    

