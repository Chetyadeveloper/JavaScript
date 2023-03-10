//Date object

  let new_date=new Date();
  console.log(new_date);
   
   // proper date
   console.log(new_date.toLocaleDateString());
   
   // proper time
   console.log(new_date.toLocaleTimeString());

   // getDay
   let c=new Date().getDay();
   console.log(`the day is :${c}`);

   //getMonth

   let m=new Date().getMonth();
   console.log(`the month is ${m}`);

   //getYear

   let y=new Date().getFullYear();
   console.log(`the year is :${y}`);

    