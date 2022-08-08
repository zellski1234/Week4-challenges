

const array = [1,2,3,4,5];

const multiply = (i) =>{
    return i * 3;    
};

let arrayresult = array.map(multiply)

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
    setTimeout(() => {
        console.log(arrayresult[i]);        
    }, 2000);
}