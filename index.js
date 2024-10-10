//*******************CONDITIONAL STATEMENT */
//Cheking if number is greater than other number 
 let num1 = 23;
 let num2 = 32;
 if(num1>num2){
    console.log("Num 1 is greater")
 }else{
    console.log("Num 2 is greater")
 }


 //check if string is equal 
 let user1 = "child";
 let user2="child";
 if(user1==user2){
    console.log("matched");
 }else{
    console.log("no match")
 }

 //else if 

 let user = 21;
 if(user>=0 && user<=5){
    console.log("Child");
 }else if(user >5 && user <= 17){
    console.log("Teen")
 }else if(user >=18 && user <=60){
    console.log("Adult")
 }else if(user > 60){
    console.log("old")
 }else{
    console.log("enter valid age");
 }

