document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.querySelector("input[type='text']").value;
let email = document.querySelector("input[type='email']").value;
let message = document.querySelector("textarea").value;

let formMessage = document.getElementById("formMessage");

if(name === "" || email === "" || message === ""){
formMessage.textContent = "Please fill all fields.";
formMessage.style.color = "red";
}
else{
formMessage.textContent = "Message sent successfully!";
formMessage.style.color = "green";
}

});