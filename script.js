const input = document.querySelector('input');
const form = document.querySelector('form');
const button = document.querySelector('.btn');
const error = document.querySelector('#error');
const errorMsg = document.querySelector('#error-msg');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const match = '/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/';


function keepBorder (event) {

    input.style.border = "2px solid #dd4c4cc5";
    input.style.background = "white";
    if (input.value.match(validRegex) && input == "") {
        
    }

    else {

        //Error Message
       
        error.style.visibility = "visible";
        errorMsg.style.visibility = "visible";

        // Stop Reloading Page

        event.preventDefault();
    }
   
};

input.addEventListener("enter", keepBorder);
button.addEventListener('click', keepBorder);





