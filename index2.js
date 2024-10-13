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

let names1 = ["ayan","gaurav","poorvi","pooru"]
let naam2 =[];
for(let i=0;i<=names.length-1;i++){
   if(names[i]==="poorvi"){
      continue
   }else{
      naam.push(names[i]) ;
   }
}
console.log(naam)

//for loop
let num = [2,4,6,8];
let multiplynum = []
for(let i=0;i<=num.length - 1;i++ ){
   multiplynum.push(num[i]*2)
}
console.log(multiplynum);

let countdown =[];
let j=5;
while(j>=1){
   countdown.push(j)
   j--
}
console.log(countdown);
