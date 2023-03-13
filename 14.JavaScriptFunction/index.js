//Javascript Function

//Example 1:
    /*
        //creation of function
            function display(){
            console.log('Wlc to destinyhub');
            }
        // calling function
            display();
            
      */
     
            // How Function call works.
              /*
            console.log('first line');
            console.log('geekshows');
            function display(){
                console.log('inside function');
            }
            console.log('outside the function');
            display();
            */

        // function with parameter
              /*
                function display(name1,name2){
                    console.log(`${name1} , ${name2}`);
                }    
                display('chetan','kamble');
             */

        // function argument missing :--- when one argument is missing set as undefine.
               /*
                function display(a,b,c){
                    console.log(`A:${a} , B:${b} , C:${c}`);
                }
                display(10,20);  // A: 10 B:20 C:undefine
              */

        // Argument Object :---
             /* Example 1:--
                   function display(){
                       console.log(arguments[0]);
                       console.log(arguments[1]);
                   }
                   display('chetan','kamble');
              */

              /* Example 2 :--     
                
                    function display(){
                        for(let i=0;i<arguments.length;i++){
                                console.log(arguments[i]);
                        }
                    }
                    display('Chetan','Dilip','Kamble');    
               */
        // To Many Function Argument
            /* Example 1:
              function display(a,b){
                  console.log(`A:${a}, B:${b} , C:${arguments[2]}`);
              }
              display(10,20,30);
            */  
         // Default parameter
              /* Example 1:
                    function display(a,b,c=30){
                            console.log(`A:${a} , B:${b} ,C:${c}`)
                    }  
                    display(10,20);   // A: 10 B : 20 C:30
              */

                /* Example 2 :
                    function display(a,b=10,c){
                       console.log(`A:${a} , B:${b} , c:${c}`);
                    }
                     display(2,5,6);   // A:2 B: 5 C:6
                */

                /* Example 3 :     
                     function display(num,a=["chetan","kamble"]){
                         console.log(`Num : ${num} , ${a[0]} ,${a[1]}`);
                     }
                     display(10,[20,30]);
                */

            // Rest Parameter :
                  /* Example :
                      function display(a,b,...args){
                        console.log(`A : ${a} , B:${b} , Agrs : ${args}`);
                     }
                     display(10,20,30,40,50);
                   */
                  
                     
              // Difference between Rest Parameter and Argument Object
                  /*  
                    function restShow(a,...args){
                        console.log(`A: ${a} , Args : ${args}`);
                    }
                    restShow(10,20,30,40);
                    
                    function show(a){
                        console.log(`${a}`);
                        console.log(arguments);
                            
                    }
                    show(10,20,30,40);
                */
      
                // Return statement

                  /*
                   function display(a,b){
                        return(10+20);
                    }
                    
                      console.log(display(10,20));
                    */

                 // varaible scope 
                    /* example : 
                     function show(){
                        //Local Variable
                        var j="J is a Local Variable of outer function ";
                        console.log(j);
                        function innerFun(){
                            var k="k is Local Variable of inner function";
                            console.log(k);
                            console.log(j);  //outer function calling inner function is allow.
                        }
                        innerFun();
                        // console.log(k); // inner function calling outer function is not allow.
                    }
                    show();
                  */  
                 // Block Scope
                       /*Example 1 :    
                            if(true){
                                var i =10; // Local Variable
                                console.log(i); //10
                            }
                            console.log(i);  // 10
                        */  
                          /* Example 2 :  
                            if(true){
                                let i =10; // local variable
                                console.log(i); //10
                            }
                            console.log(i);  // not accessible 
                          */  

                   // Variable Hoisting :- moving decleartion part at the top of function.
                        /*   
                          var a=10;
                          console.log(a);
                          var b=20;
                          console.log(b);
                         */
                          /* compile time 
                                var a;
                                var b;
                                console.log(a);
                                console.log(b);
                          */

                    // closure : Inner function can access the variable of outer function.
                        /* Example 1 :
                            var i=10;
                            function show(){
                            var j=20;
                            console.log('j is inner function varibale:'+j);
                            console.log('i is a outer function:'+i);
                            }
                            show();
                          */      

                           /* Example 2:
                                function show(){
                                    var j='J is local outer function varaible';
                                    console.log(j);
                                    function innerFun(){
                                        var k='k is local inner function variable';
                                        console.log(k);
                                    }
                                    innerFun();
                                }
                                show();
                            */

                                



























                        
                   
                   