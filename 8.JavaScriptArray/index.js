/* Array : Array is nothing but collection of data item.
           Array can be divided into two ways.
           1. array using literals
           2. array using constructor
           
     
*/  
    //  1. Array using Literals :---
      
                console.log('=== Array Literals');   
                let geeks = [];
                // adding element to array
                geeks[0] = 'apple';
                geeks[1] = 'banana';
                geeks[2] = 'bitroot';
                geeks[3] = 'watermelon';
                geeks[4] = 'graps';
                console.log(geeks);

                //accessing element from Array
                console.log('==Accessing Element from Element');
                console.log(geeks[0]);  // apple
                console.log(geeks[1]);  // banana
                console.log(geeks[2]);  // bitroot
                console.log(geeks[3]);  // watermelon
                console.log(geeks[4]);  // graps

                // modification of element from Array
                 console.log('==Modification of element from Array==');
                 geeks[0] = 'ramfruit';
                 console.log(geeks);

                 // delete of element from Array
                 console.log('==Delete of element from Array==');
                 delete geeks[0];
                 console.log(geeks);

     // 2. Array using Constructor :---

                console.log('==Array Constructor==');
                let honey=new Array();   // empty Array
                 honey[0] = 'HTML';
                 honey[1] = 'CSS';
                 honey[2] = 'Javascript';
                 console.log(honey);


                 //Accessing element from Array constructor
                 console.log('===Accessing of element from Array Constructor');
                 console.log(honey[0]); //HTML
                 console.log(honey[1]); // CSS
                 console.log(honey[2]); // JavaScript


            // Iteration of Array 
                 console.log('===Iteration of Array');
                 let gee = ['Rahul','Ram',56,'Jay'];
                 for(let i=0;i<4;i++){
                       console.log(`index of ${i} is : ${gee[i]} `);
                 }

            // forEach 
                console.log('==forEach==');
                gee.forEach(function(value,index){
                    console.log(`the value is :${value} of  ${index}`);
                });                   
           
          // for of
             console.log('==for of ==');
             for (let x of gee) {
                 console.log(x);
             }
             







//Array Method
/*
   1.shift() --> remove the first element from the array.
   
   2.unshift() --> add the first element to array.

   3. push() --> add the last element to array.

   4. pop() --> remove the last element from  array .

   5. sort() --> to sort the array in ascending order.

   6. reverse() --> to reverse the element.

   7. splice() --> to remove/replace from the middle.

   8. split() --> to split a string to an array .

   9. join() --> to join the array elements to string .
   
   10. slice() --> to create a new copy of an array .

   11.forEach() --> to loop the array element.

   12.find() --> find exact element with condition from array.

   13 filter() --> to filter the array element.
*/

//              Examples :
            // 1.shift() --> remove the first element from the array.

                 console.log( `=====shift()======`);
                 let technologies = ['HTML','CSS','JavaScript','Jquery','Bootstrap'];
                 console.log(technologies);
                 technologies.shift();
                 console.log(technologies);

            //2.unshift() --> add the first element to array.

                 console.log(`===unshift=====`);
                 technologies.unshift('nodejs');
                 console.log(technologies);

             //3. push() --> add the last element to array.

                  console.log(`===push===`);
                  technologies.push('salesforce');
                  console.log(technologies);

             // 4. pop() --> remove the last element from  array .
                   
                     console.log('====pop====');
                     technologies.pop();
                     console.log(technologies);

              //  5. sort() --> to sort the array in ascending order.     
             
                       console.log('===sort===');
                       technologies.sort();
                       console.log(technologies);

               //  6. reverse() --> to reverse the element.
                      
                        console.log('==reverse===');
                        technologies.reverse();
                        console.log(technologies);

                    // reverse the order of element
                         console.log('===reverse the order');
                         technologies.sort().reverse();
                         console.log(technologies);

                //  7. splice() --> to remove/replace from the middle.
                    
                      //a.splice(index) --> it remove all the element from the give index
                      
                          console.log('==splice==');
                          let techno = ['HTML','CSS','JavaScript','Jquery','Bootstrap'];
                          console.log(techno);
                          techno.splice(2);
                          console.log(techno);

                       //b.splice(index,position) --> it remove element from the given index
                       
                       console.log('==splice index position ==');
                       let technoo = ['HTML','CSS','JavaScript','Jquery','Bootstrap'];
                       techno.splice(2,1);
                       console.log(techno);

                       //c.splice(index,position,text) --> it replace the given position with new text

                       console.log('===splice with index position text');
                       techno.splice(2,1,'nodejs');
                       console.log(techno);
                   
                //  8.       join() --> to join the array elements to string


                        console.log('===join ===');
                       let joinstring = technologies.join('-');
                       console.log(joinstring);

                  // 9.    split() --> to split a string to an array .
                  
                               console.log('===split===');
                               let splitstring=joinstring.split('-');
                               console.log(splitstring);

                   //             
