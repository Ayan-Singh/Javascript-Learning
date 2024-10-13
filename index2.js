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
