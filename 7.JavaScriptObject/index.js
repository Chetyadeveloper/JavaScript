// JavaScript Object

// 1. use object Literal

/* Example 1:
    var fees ={};
    fees['Rahul'] = 100;
    fees['Sumit'] = 200;
    fees['Rohan'] = 300;
    fees["Super Man"] = 400;
    fees['total'] = function(){ return (100+200+300);};
       //how to access properties
    console.log(`value of rahul is :${fees['Rahul']}`);
    console.log(`value of sumit is :${fees['Sumit']}`);
    console.log(`value of rohan is :${fees['Rohan']}`);
    console.log(`value of total is :${fees['total']()}`);
    console.log(`value is :${fees["Super Man"]}`);
    */

    /*Example 2:
    
          var fees = { 
                        Rahul :100,
                        Sumit:200,
                        Rohan:300,
                        "Super Man":400,
                        total:function(){
                            return(100+200+300+400);
                            }
                        };
           console.log(fees['Rahul']);
           console.log(fees['Sumit']);
           console.log(fees['Rohan']);
           console.log(fees["Super Man"]);
           console.log(fees['total']());
        

    */

  //2. Object Constructor

     // Example 1 :
   
     /*
      var fees =new Object();
      fees['Rahul'] = 100;
      fees['Sumit'] = 200;
      fees['Rohan'] = 300;
      fees["Super Man"] = 500;
      fees['total'] =function() {
            return(100+200+300+400);
      }
        //how to access properties

      console.log(`the value of Rahul is ${fees['Rahul']}`);
      console.log(`the value of sumit is ${fees['Sumit']}`);
      console.log(`the value of rohan is ${fees['Rohan']}`);
      console.log(`the value of total is ${fees['total']()}`);
      console.log(`the value of super man is ${fees["Super Man"]}`);
    */

      //Delete object

      var fees =new Object();
      fees['Rahul'] = 100;
      fees['Sumit'] = 200;
      fees['Rohan'] = 300;
      console.log(fees['Rahul']);
      console.log(fees['Sumit']);
      console.log(`${fees['Rohan']}`);
       delete fees['Rahul'];
       console.log(fees);
       fees['chetan'] = 25000;
       console.log(fees);