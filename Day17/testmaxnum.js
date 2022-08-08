let Number1= Math.round(Math.random()*200);
let Number2= Math.round(Math.random()*200);
let Number3= Math.round(Math.random()*200);
console.log(`Number1: ${Number1}`);
console.log(`Number2: ${Number2}`);
console.log(`Number3: ${Number3}`);


//makes number1 back to 100 if it is above 100
function checkMaxNum(check){
    if (check >= 100) {
        check = 100;
        console.log("condition 100")
        return check;
    }
    else if (check <= 0){
        check = 0;
        console.log("condition 0")
        return check;
    }
    return check;
}

Number1 = checkMaxNum(Number1);
Number2 = checkMaxNum(Number2);
Number3 = checkMaxNum(Number3);
console.log(`Number1: ${Number1}`);
console.log(`Number2: ${Number2}`);
console.log(`Number3: ${Number3}`);