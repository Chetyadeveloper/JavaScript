/*
    DataType :--
                    The type of data which are assign to variable.
                 1.Number
                 2.String
                 3.Boolean
                 4.Undefined
                 5.null



*/

//String

let employeeName = 'John' ;
console.log(`value : ${employeeName} Type : ${typeof employeeName}`);

// Number

let employeeAge = 40 ;
console.log(`Value : ${employeeAge} Type : ${typeof employeeAge}`);

// Boolean
 let isManger = true ;
 console.log(`Value : ${isManger} Type : ${typeof isManger}`);

 // Undefined
 let name ;
 console.log(`Value : ${name} Type:${typeof name}`);

 //null (dummy data)
 let test = null ;
 console.log(`Value :${test} Type :${typeof test}`);


  //Re-assignment is allowed

  let abc ;
  abc = 10;
  abc = 'Chetan';
  console.log(`Value : ${abc} Type:${typeof abc}`);
