let login = document.querySelector(".login input");
let password = document.querySelector(".pass input");
let button = document.querySelector("button");
let form = document.querySelector(".loginForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault()
});


const user = "admin";
const pass = "admin";

alert("Use Below Details to Login\nUserName : admin\nPass : admin");
 
button.addEventListener("click", ()=>{
     check();
})

let check =  ()=>{
    if(login.value == user && password.value == pass){
        alert("login success");
        window.location.href="home.html";
    }else{
        alert("Please Enter Valid UserName and Password");
        window.location.href="index.html";
    }
}