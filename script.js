
const storednumbers = [];
const operatorArray = [];
displayScreen = document.getElementById('calcScreen');
displayScreen.value = 0;
mathNumbers = [];

//operation functions.
function addButton(op1, op2){
 op1 + op2;
}

function minusButton(op1, op2){
    op1 - op2;
}

function divideButton(op1, op2){
    op1/op2
}

function multiplyButton(op1, op2){
    op1*op2
}



//setting up the values of the buttons so that I can store them later.
const btnone = document.getElementById("btn1")
const btntwo = document.getElementById("btn2")
const btnthree = document.getElementById("btn3")
const btnfour = document.getElementById("btn4")
const btnfive = document.getElementById("btn5")
const btnsix = document.getElementById("btn6")
const btnseven = document.getElementById("btn7")
const btneight = document.getElementById("btn8")
const btnnine = document.getElementById("btn9")
const btnzero = document.getElementById("btn0")

const numberButtons = [
    {name: btnone, value: 1},
    {name: btntwo, value: 2},
    {name: btnthree, value: 3},
    {name: btnfour, value: 4},
    {name: btnfive, value: 5},
    {name: btnsix, value: 6},
    {name: btnseven, value: 7},
    {name: btneight, value: 8},
    {name: btnnine, value: 9},
    {name: btnzero, value: 10},
]

//event listners that handle putting the value of the buttons into the storenumber function
btnone.addEventListener('click', () => {
    storenumber(btnone.value);
})
btntwo.addEventListener('click', () => {
    storenumber(btntwo.value);
})
btnthree.addEventListener('click', () => {
    storenumber(btnthree.value);
})
btnfour.addEventListener('click', () => {
    storenumber(btnfour.value);
})
btnfive.addEventListener('click', () => {
    storenumber(btnfive.value);
})
btnsix.addEventListener('click', () => {
    storenumber(btnsix.value);
})
btnseven.addEventListener('click', () => {
    storenumber(btnseven.value);
})
btneight.addEventListener('click', () => {
    storenumber(btneight.value);
})
btnnine.addEventListener('click', () => {
    storenumber(btnnine.value);
})
btnzero.addEventListener('click', () => {
    storenumber(btnzero.value);
})

//operator button variables and listners
const plusbutton = document.getElementById("plus")
const minbutton = document.getElementById("minus")
const divbutton = document.getElementById("divide")
const multbutton = document.getElementById("multiply")


//store number function
function storenumber(btnvalue){
    storednumbers.push(btnvalue);
    console.log(storednumbers.length);
    newScreen = storednumbers.join('');
    displayScreen.value = newScreen;
    mathNumbers = [newScreen];
}

/*Clear function */
const clearbtn = document.getElementById("clear")
clearbtn.addEventListener('click', ()=> {
    clear();
})

function resetArrays() {
    storednumbers.length = 0;
}

function clear() {
    inputStr = '0';
    resetArrays();
    displayScreen.value = 0;
}

/* To Do:
2. Make my operators work in the console.
3. Make the actual operation works
4. Make the result not only display, but also to replace the first value
5. Make it so that it can handle decimels  */

