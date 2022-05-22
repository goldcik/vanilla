const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const machineInput = document.querySelector("#machineValue");
const userInput = document.querySelector("#inputValue");
const displayh1  = document.querySelector("#startGame");
const displayh2  = document.querySelector("#gameResult");
//const loginButton = document.querySelector("#login-form button");

//console.log(loginInput);
//console.log(loginButton);


const HIDDEN_CLASSNAME = "hidden";
const loginUsername = [];

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);

    const savedUsername = localStorage.getItem("ID");
  
    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
        loginUsername.push(username);
        saveUser();
    } else {
        paintGreetings(username);
    }

}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginUsername.push(username);
    saveUser();
}

function saveUser() {
    localStorage.setItem("ID", JSON.stringify(loginUsername));
    // always new text...
}

loginForm.addEventListener("submit", onLoginSubmit);

function showValue(event)
{
    event.preventDefault();

    if (machineInput.value < 0)
    {
        alert("Please input positive number");
    }
    else
    {
        const mValue = Math.floor(Math.random() * (machineInput.value - 0 +1)) + 0;
        //let mValue = Math.floor(Math.random() * machineInput.value);

        if (mValue == userInput.value)
        {
            displayh1.innerText = "You chose:" + userInput.value + "," + " the machine chose: " + mValue ;
            displayh2.innerText = "You Win!";
            
            if (displayh1.classList.contains("hidden"))
            {
                displayh1.classList.remove("hidden");
                displayh2.classList.remove("hidden");
            }
        }
        else
        {
            displayh1.innerText = "You chose:" + userInput.value + "," + " the machine chose: " +mValue ;
            displayh2.innerText = "You Lose!";
            
            if (displayh1.classList.contains("hidden"))
            {
                displayh1.classList.remove("hidden");
                displayh2.classList.remove("hidden");
            }
        }
        
    }
    
    
}

//loginForm.addEventListener("submit", showValue);

const clockdisplay = document.querySelector("#clock");

function showTime() {
const targetTime = new Date(2022, 11, 24, 0, 0, 0).getTime();
const nowTime = new Date().getTime();
const remianTime = targetTime - nowTime;

const days = Math.floor(nowTime / (1000*60*60*24)); 
const hours = String(Math.floor((nowTime / (1000*60*60)) % 24)).padStart(2, "0"); 
const miniutes = String(Math.floor((nowTime / (1000*60)) % 60)).padStart(2, "0"); 
const seconds = String(Math.floor(nowTime / 1000 % 60)).padStart(2, "0"); 

//clockdisplay.innerText = `${days}d ${hours}h ${miniutes}m ${seconds}s`;
clockdisplay.innerText = `${hours}h ${miniutes}m ${seconds}s`;
}

showTime();
setInterval(showTime, 1000);

const quotes = [
    {
        quote   : "AAA",
        author  : "aaa",
    },
    {
        quote   : "BBB",
        author  : "bbb",
    },
    {
        quote   : "CCC",
        author  : "ccc",
    },
    {
        quote   : "DDD",
        author  : "ddd",
    },
    {
        quote   : "EEE",
        author  : "eee",
    },
    {
        quote   : "FFF",
        author  : "fff",
    },
    {
        quote   : "GGG",
        author  : "ggg",
    },
    {
        quote   : "HHH",
        author  : "hhh",
    },
    {
        quote   : "III",
        author  : "iii",
    },
    {
        quote   : "JJJ",
        author  : "jjj",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
//console.log(todaysQuote.quote);

//quote.innerText = todaysQuote.quote;
//author.innerText = todaysQuote.author;

function changeColor(event)
{
    event.preventDefault();
    const colors = ["Blue", "Green", "Red", "Black", "White", "Pink", "Pupple"];

    const target1 = colors[Math.floor(Math.random()*colors.length)];
    const target2 = colors[Math.floor(Math.random()*colors.length)];
    
    document.body.style.backgroundImage = "linear-gradient(to right, " +target1+ ", "+ target2 + ")";

    console.log(target1);
}

function changeImage()
{
    //event.preventDefault();
    const colors = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];

    const target1 = colors[Math.floor(Math.random()*colors.length)];
    //const target2 = colors[Math.floor(Math.random()*colors.length)];
    
    //odcument.body.style.backgroundImage = "linear-gradient(to right, " +target1+ ", "+ target2 + ")";
    
    const bgImage = document.createElement("img");
    bgImage.src = target1;
    document.body.appendChild(bgImage) ; 

    console.log(target1);
}

changeImage();

//const click = document.querySelector("#color");
//click.addEventListener("submit", changeColor);

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos.remove(li.span.innerText);
    paintToDo(newTodo);
  }

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo + " : ";
  button.innerText = "DEL";
 
  li.appendChild(span);
  li.appendChild(button);
  
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    // always new text...
  }

toDoForm.addEventListener("submit", handleToDoSubmit);

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
 
function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
