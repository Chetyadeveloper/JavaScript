//for loop , nested for loop
//while loop 
// do-while loop


//Examples :---

//for loop :--
    
    /* Syntax:  for(initization;condition;increment/decerement){
                     // block of statement ;                  
                    }     
    */

           //example : 1 .  
                            let result = '';
                             for (let i = 0; i < 5; i++) {
                                    result +=i;
                                
                             } 
                             console.log(`${result}`);        

            //example : 2 .  
                            let resultt = '';
                            let i=0;
                            for (; i < 5; i++) {
                                resultt +=i;
                            
                            } 
                            console.log(`${resultt}`);  
                            
            //example : 3 .  
                        
                            let a = 0;
                            for (; a < 5; ) {
                                console.log(a);
                                a++;
                            
                            } 

             //example : 4.  
                             let c = 0;
                             for (; ; c++) {
                                if (c==3) {
                                    break;
                                }
                                console.log(c);
                            }               
                                 
             // example 5 :
                             console.log(`cities`);
                             let r='';
                             let cities = ['Hyd','Che','Ban','Ngp'];
                             for (let index = 0; index < cities.length; index++) {
                                   r+=`${cities[index]},`;     
                                 
                                
                             }
                             console.log(r);

// nested loop :--
        
     /* Syntax:  for(initization;condition;increment/decerement){
                         // block of statement ;   
                      for(initization;condition;increment/decerement){
                          // block of statement ;                  
                         }     
            
                    }     
    */

        // Example 1 :
          
                       for(let r=0; r<3;r++){
                             console.log("Outer loop"); 
                             console.log(r);
                             for(let j=0 ; j < 5 ; j++){
                                console.log(" inner loop"); 
                                console.log(j);
                                 
                             }                          

                       }

                    
      // while loop
      
      // example 1 :
                            let d = 0 ;
                            while( d < 5){
                                console.log(`while loop : ${d}`);
                                d ++ ;

                            }

       // nested while loop
                           let e = 0;
                           while (e < 3) 
                           {
                               console.log(`outer while lopp ${e}`);
                               e ++;
                               let f = 0;
                              while (f < 5) {
                                console.log(`innner loop + ${f}`);
                            }

                           }


       // do -while
       
       //example 1 :

           let v = 0;
           do{
                    console.log(`${v}`);
                    v ++ ;
           }while(v < 5);


       // nested do -while 
       
      // example :
       
                    let q = 0;
                    do{
                        document.write(q);
                        q ++;
                        let w = 0;
                        do{
                            document.write('inner loop'+w);
                        }
                        while(w<5);
                    }while(q<5);




                            

                             