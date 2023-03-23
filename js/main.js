const inputA = document.querySelector('.js-input-a');
const inputB = document.querySelector('.js-input-b');
const selectOperation = document.querySelector('.js-operation');
const btn = document.querySelector('.btn');
const outPut = document.querySelector('.js-output');

btn.addEventListener('click', function(){

    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOperation.value;
    const result = calculate({a,b,operation});

    outPut.innerHTML = result;

})



