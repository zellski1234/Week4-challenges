// function does logs hello codenation
const speak = () =>{
    console.log(`Hello Codenation`)
}

// loops5times
const loop5 = (speakFunction) =>{
    for(let i = 0; i < 5; i++){
        speakFunction();
    }
};
 
loop5(speak);