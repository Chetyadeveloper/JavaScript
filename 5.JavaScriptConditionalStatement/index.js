//If else
// switch 


//if else example

let a = 100 ;
if(a == 10){
    console.log(`value is : ${a}`);
}
else if(a == 20){
         console .log(`value is : ${a}`);
}
else {
    console.log(`value is not existing`);
}

//switch statement

let day = new Date().getDay();
console.log(day);
let today ='';
switch(day){
   case 0 :
             today = 'Sunday';
             break;
   case 1 :
            today = 'Monday';
            break;
    case 2 :
            today = 'Tuesday';
            break;
    case 3 :
            today = 'Wednesday';
            break;
    case 4 :
            today = 'Thursday';
            break;
    case 5 :
            today = 'Friday';
            break;
    case 6 :
            today = 'saturday';
            break;
    default :
                today = 'none';
                break;
       
                                                                                   
}
console.log(`Today is :${today}`);


