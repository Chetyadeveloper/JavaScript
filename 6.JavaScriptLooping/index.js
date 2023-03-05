//for loop
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

                            

                             