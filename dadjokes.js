// bringing in today's date and get weekday
const todayDate = new Date();
let weekDay = todayDate.getDay();

// declaire the variable for message1
let message1;

// change the variable for message1, depending on what day it is
switch(weekDay) {
    case 0:
        message1 = "Sunday";
        break;
    case 1:
        message1 = "Monday";
        break;
    case 2:
        message1 = "Tuesday";
        break;
    case 3:
        message1 = "Wednesday";
        break;
    case 4:
        message1 = "Thursday";
        break;
    case 5:
        message1 = "Friday";
        break;
    case 6:
        message1 = "Saturday";
        break;
}


// inserts the date into the welcome message
document.querySelector("#message1").textContent = message1;

// declare variable for message 2
let message2;


// function to set a message based on which child types his/her name

function chooseMessage2(child) {
    if (child == "claire") {
        message2 = "Hello, Eldest Daughter. Here is your joke for today: "
    }

    else if (child == "oscar") {
        message2 = "Hello, One and Only Son. Here is your joke for today: "
    }

    else if (child == "ivy") {
        message2 = "Hello, My Baby Girl. Here is your joke for today: "
    }

    else if (child == "jeremy") {
        message2 = "Teachers like dad jokes? Ok-ay. Here you go: "
    }

    else {
        message2 = "You're not one of my children but I'll joke you up anyway."
    }

    return message2
}

// this tells the button what to do when it's clicked. it is created so it can be
// passed as an argument into the EventListener

function clickHandler() {
    // grabs the value from the input box and inserts it into jokeChild variable
    let jokeChild = document.getElementById("fullNameBox").value;
    console.log(jokeChild);
    // runs the chooseMessage2 function and puts it into the message2 variable
    message2 = chooseMessage2(jokeChild.toLowerCase());

    // fetches the random joke by calling the getJoke function
    currentJoke = getJoke(message2);
    
} 


// this connects the name button actions to the button element in the HTML
buttonElement = document.querySelector("#submitName"); 
buttonElement.addEventListener("click", clickHandler);

// this connects the self destruct button actions to the button element in the HTML
buttonElement = document.querySelector("#selfDestruct"); 
buttonElement.addEventListener("click", selfDestruct);

// This creates the functionality for the self-destruct button
function selfDestruct() {
    document.querySelector("#wholePage").innerHTML = ""
}

// this resets the page and then prints out the joke on the screen with a personalized message
function setJokeText(chosenMessage, chosenJoke){
    reset();
    document.querySelector('#message2').textContent = chosenMessage;
    document.querySelector('#joke_message').textContent = chosenJoke;
};

// this resets the page
function reset() {
    document.querySelector('#message2').textContent = '';
    document.querySelector('#joke_message').textContent = '';

};

// this fetches the joke, pulls out the JSON, identifies the joke from the object, and sets the joke message
function getJoke(message2) {
    
    let url = 'https://icanhazdadjoke.com/'
    fetch(url, {
        
        headers: {
            'Accept': 'application/json',
            'User-Agent': "Kathryn's dad-joke-inator v1"
            
        }
        
    }).then(response => response.json()).then(jsonJoke => {
        console.log(jsonJoke);
        console.log(jsonJoke.joke);
        jokeNugget = jsonJoke.joke;
        setJokeText(message2, jokeNugget);
        

    });
}
