

let Number1= Math.round(Math.random()*200);
console.log(`Number1: ${Number1}`);


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
}

checkMaxNum(Number1);
console.log(`Number1: ${Number1}`);
