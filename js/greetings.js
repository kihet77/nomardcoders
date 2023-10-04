const loginForm = document.querySelector("#login-form") 
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const hiddenClassName = "hidden"
const usernameKey = "username"

function onLoginSubmit (event){
    event.preventDefault();
    localStorage.setItem(usernameKey, loginInput.value);
    loginForm.classList.add(hiddenClassName);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(usernameKey)
    greeting.classList.remove(hiddenClassName);
    greeting.innerText = `Hello ${username}`;
}



const savedUsername = localStorage.getItem(usernameKey);

if(savedUsername === null){
    loginForm.classList.remove(hiddenClassName);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings()
}

