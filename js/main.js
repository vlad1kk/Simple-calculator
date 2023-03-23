//place for work with user interface:
const inputA = document.querySelector('.js-input-a');
const inputB = document.querySelector('.js-input-b');
const selectOperation = document.querySelector('.js-operation');
const btn = document.querySelector('.btn');
const outPut = document.querySelector('.js-output');
const clear = document.querySelector('.clear');

btn.addEventListener('click', function() {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOperation.value;
    const result = calculate({ a, b, operation });

    // console.log(result);
    outPut.innerHTML = result;
});

clear.addEventListener('click', ()=>{
    inputA.value = '';
    inputB.value = '';
    outPut.innerHTML = '';
})



