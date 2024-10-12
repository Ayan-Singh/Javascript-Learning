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

//ARRAY 

let teaflavours = ["Green Tea" , "Black Tea" , "Oolong Tea"];
let firstTea = teaflavours[0];
console.log(firstTea);
console.log(teaflavours);

let cities = ["rewa" , "satna","pune","sidhi"]
let favourite = cities[2];
console.log(favourite);

teaflavours[1] = "Ginger Tea"
//Adding element
teaflavours[teaflavours.length]="Milk Tea"
console.log(teaflavours);

//Using push method
teaflavours.push("Normal Tea");
teaflavours.pop();
let arr = teaflavours.pop();
console.log(arr)
console.log(teaflavours);

//Merging arrays 
let merge = teaflavours.concat(cities) ;
console.log(merge)
let length = merge.length;
console.log(length)
let check = cities.includes("rewa")
console.log(check)

//for loop
let num = [2,4,6,8];
let multiplynum = []
for(let i=0;i<=num.length - 1;i++ ){
   multiplynum.push(num[i]*2)
}
console.log(multiplynum);

//
let names = ["ayan","gaurav","poorvi","pooru"]
let naam =[];
for(let i=0;i<=names.length-1;i++){
   if(names[i]==="poorvi"){
      continue
   }else{
      naam.push(names[i]) ;
   }
}
console.log(naam)
