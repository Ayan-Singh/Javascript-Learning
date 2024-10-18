function greet(name){
    return `Hello ${name} , How are you today!`
}
console.log(greet("Ayaaan"))

function makeTea(typeofTea){
    return `Making ${typeofTea} `
}
console.log(makeTea("green tea"))

//function inside function

function orderTea(type){
    function orderConfirm(){
        return `Order for ${type} is confirmed`
    }
    return orderConfirm()
}
console.log(orderTea("chai"))

//arrow function

const calculateTotal = (price , quantity) => {let total = price*quantity 
    return total
};
console.log(calculateTotal(4,8))


