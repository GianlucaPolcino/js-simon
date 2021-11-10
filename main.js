const numbers = [];
const userNumbers = [];
let counter = 0;

while(numbers.length < 5){
    const random = randomNumber(1, 100)
    if(!numbers.includes(random)){
        numbers.push(random)
    }
}

document.querySelector('.stamp').innerHTML = 
`
    <h2 class="fs-1">${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]} </h2>

`

setTimeout(function(){
    document.querySelector('.gp-numbers').innerHTML =
    `
        <h2>!!!</h2>
    `
}, 9999)

setTimeout(function(){

    for(let i = 0; i < numbers.length; i++){
        const ask = parseInt(prompt('Inserisci i numeri'));

        if(numbers.includes(ask)){
            userNumbers.push(ask)
            counter++
        }
        
    }
    
    if(userNumbers.length > 0){
        document.querySelector('.gp-numbers').innerHTML = 
        `
            <h2 class="fs-1">Hai indovinato ${counter} numeri!</h2>
        
        `
        setNumber(userNumbers);
        console.log(this);
    } else{
        document.querySelector('.gp-numbers').innerHTML = 
        `
            <h2 class="fs-1">Mi dispiace, non hai indovinato neanche un numero!</h2>
        `
    };

    
}, 10000);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

function setNumber(object){
    for(i = 0; i < object.length; i++){
        document.querySelector('.gp-numbers').insertAdjacentHTML('beforeend', `<h2 class="fs-1">${object[i]},</h2>`)
    }
}
