const loginForm =  document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
  console.log(loginInput.value)
  event.preventDefault();
  const username =  loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  console.log(greeting.innerText)
  paintGreetings(username)

}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME)
  greeting.innerText= `hello ${username}`
}




const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername  === null ){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
}else{
  paintGreetings(savedUsername)
}