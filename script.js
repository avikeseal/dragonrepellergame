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
        name:  'Store',
        'button text': ['Buy 10 Health (10 Gold)', 'Buy Weapon (30 Gold)', 'Go to Town Square'],
        'button functions': [buyHealth, buyWeapon, goTown],
        text: "You have entered the Store."
    },

    {
        name: 'Cave',
        'button text' : ['Fight Slime', 'Fight Fanged Beast', 'Go to Town Square'],
        'button function' : ['fightSlime', 'fightBeast', 'goTown'],
        text: 'You hear a noise, a sudden feeling of claustrophobia grips you...you are in the Cave'
    }
]

//initialize buttons:
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    //locations with bracakets button text, this is how we access
    //specific element inside an object by index number
    //using bracket notation to call function:
    button1.innerText = location['button text'][0];
    button2.innerText = location['button text'][1];
    button3.innerText = location['button text'][2];
    button1.onclick = location['button functions'][0];
    button2.onclick = location['button functions'][1];
    button3.onclick = location['button functions'][2];

    //using dot notation to call a function:
    //when your key is single word we can use dot notation
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
}

//building functions:
//this function is going to output the message 'going to store; in the web console:
function goStore() {
    update(locations[1]);
    //console.log('Going to Store')
   
}

function goCave() {
    //console.log('Going to Cave')
    update(locations[2]);
}

function fightDragon() {
    console.log('Fighting Dragon');
}

function buyHealth() {
}

function buyWeapon() {
}

function fightSlime() {
}

function fightBeast() {
}
