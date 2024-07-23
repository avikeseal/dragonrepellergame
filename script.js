//three ways to declare a variable:
//const var let
//using let recommended

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
// let inventory = 'stick'; //inventory can't store multiple items 
//we're going to change the values of inventory to be an array

//an array of 3 strings:
//let inventory = ['stick', 'dagger', 'sword']

//for now:
//if we want to add elements we have to start with an array
let inventory = ['stick'];

//if the values never going to change you start the value with const:
//access to all the elements on our website that we want to update with js
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#mosnterStats');
const monsterNameText = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');

const locations = [ //locations array currently has one element  which is an object
    //object:
    {
    //key-value pair
    //two elements inside the object    
    name:  'Town Square',
    'button text': ['Go to Store', 'Go to Cave', 'Fight Dragon'],
    'button functions': [goStore, goCave, fightDragon],
    text: "You are in the Town Square. You see a sign that says \"Store.\""
    },

    {
        name:  'Town Square',
    'button text': ['Buy 10 Health (10 Gold)', 'Buy Weapon (30 Gold)', 'Go to Town Square'],
    'button functions': [buyHealth, buyWeapon, goTown],
    text: "You are in the Town Square. You see a sign that says \"Store.\""
    }
]

//initialize buttons:
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = 'Go to Store';
    button2.innerText = 'Go to Cave';
    button3.innerText = 'Fight Dragon';
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = 'You are in the town square. You just stumbled upon a sign that says \"Store\".';
}

function goTown() {

}

//building functions:
//this function is going to output the message 'going to store; in the web console:
function goStore() {
    //console.log('Going to Store')
   
}

function goCave() {
    console.log('Going to Cave')
}

function fightDragon() {
    console.log('Fighting Dragon')
}

function buyHealth() {
}

function buyWeapon() {
}

