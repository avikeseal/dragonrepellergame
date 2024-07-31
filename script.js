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
let inventory = ['Stick'];

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

const weapons = [
    {
        name: 'Stick',
        power: 5
    },

    {
        name: 'Dagger',
        power: 30
    },

    {
        name: 'Clawhammer',
        power: 30
    },

    {
        name: 'Sword',
        power: 100
    },

];

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
    },

    {
        name: 'fight',
        'button text': ['Attack', 'Dodge', 'Run'],
        "button functions": [attack, dodge, goTown],
        text: 'You are fighting a monster!'
    },

    {
        name: 'kill monster',
        'button text': ['Go to Town Square', 'Go to Town Square', 'Go to Town Square'],
        'button functions': [goTown, goTown, goTown],
        text: 'The monster screams "Arrrgggghhh!" as it dies. You gain experience points and discovered gold!'
    },

    {
        name: 'lose',
        'button text': ['REPLAY?', 'REPLAY?', 'REPLAY?'],
        'button functions': [restart, restart, restart],
        text: 'You are dead x('
    }
];

const monsters = [
    {
        name: 'slime',
        level: 2,
        health: 15
    },

    {
        name: 'Fanged Beast',
        level: 8,
        health: 60
    },

    {
        name: 'Dragon',
        level: 20,
        health: 300
    }
];

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



function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }

    else {
        text.innerText = 'You do not have enough gold to purchase health.';
    }
}

function buyWeapon() {
    //nested if statement to check if current weapon 
    //is less than 3 which is the index of the last weapon

    //instead of nested if statements like so we can write a code 
    //to check the length of the array itself
    //if (currentWeapon < 3)
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -=  30;
            currentWeapon++; //doing ++ adds 1 to the current weapon
            goldText.innerText = gold;
            //accessing the weapons array using brackets to focus on specific weapon in the array
            //dot notation and name of weapon
            let newWeapon = weapons[currentWeapon].name;
            //concatanate new weapon
            //anytime the inner text is updated,
            //the old text is completely erased
            //this time we'll use the += operator to add 
            text.innerText = 'You now have a ' + newWeapon + '. ';
            inventory.push(newWeapon);
            //inserts new weapons acquired into the inventory
            //here inventory is an array 
            text.innerText += ' In your inventory you have: ' + inventory;
        }
    
        else {
            text.innerText = 'You do not have enough gold to purchase weapon.';
        }
    } else {
        text.innerText = 'You are already yeilding the ultimate weapon!';
        button2.innerText = 'Sell yuor weapon for 15 gold';
        button2.onclick = sellWeapon;
    }
    
}

function sellWeapon() {
    //here we write an if statement that checks whether
    //the length of the inventory array is greater than 1
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        //the new version of currentWeapon is scoped only to
        //this if statement
        //when this if statement comes to an end then the old version of 
        //currentWeapon will be used again
        //shift will remove the first element from the array and return 
        //it to this variable 
        let currentWeapon = inventory.shift();
        text.innerText = 'You sold a ' + currentWeapon + '.';
    } else {
        text.innerText = "You can't sell your only weapon."
    }
}

function fightSlime() {
    //we'll set fighting equal to 0 which 
    //is the index of the slime in the monsters array
    //then we call the goFight function
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    //console.log('Fighting Dragon');
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    //this is how we update css styles in js:
    monsterStats.style.display = 'block';
    //monster name and monster health:
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    //adding more text using the += operator and string concatenation to get the weapon name:
    text.innerText += "You attack it with your " + weapons[currentWeapon].name + ".";
    //when you attack you get damaged:
    health -= monsters[fighting].level;
    //the monster gets damaged as well:
    monsterHealth -= weapons[currentWeapon].power;
    //here we'll add a random number between 1 and XP:
    //math.random will create a random number between 0 and 1
    //it will then multiply with the xp and math.floor will round it down
    //to the nearest whole number and then add 1
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    //updating inner text of health and monsterHealth:
    healthText.innerText = health;
    monsterHealth.innerText = monsterHealth;
    //now we'll check if health <= 0:
    //if it is we'll call the function lose:
    if (health <= 0) {
        lose();
        //else statement can be conditional with an else if statement:
        //here we use an else if statement with an if statement to see
        //if monster health is <= 0:
        //if it is the defeatMonster function is called:
    } else if (monsterHealth <= 0) {
        defeatMonster();
    }
}

function dodge() {
    //string concatenation to get the monster name that our slayer is fighting:
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}

function defeatMonster() {
    //here we're gonna set gold equal to monster's level times 6.7 
    //and then round that down to the nearest whole number:
    gold += Math.floor(monsters[fighting].level * 6.7);
    //and now we update the inner text on the screen:
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    //finally we call the update function and pass 4 for location:
    update(locations[4]);

}

function lose() {

}