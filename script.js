// calling all elements from html we required and storing 
let form = document.querySelector("#form");

let name = document.querySelector("#name");

let email = document.querySelector("#email");

let password = document.querySelector("#password");


// function to be done whe users submits the form
form.addEventListener('submit', (e) => {

    const namevalue = name.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();


    // if user did not enter any value it shows an alert please enter name
    if (namevalue == "") {
        e.preventDefault();
        alert("Please  enter  name")
        name.focus()
        return false
    }

    // if user didn't enter valid name it shows an alert Enter valid name
    if(!isNaN(namevalue)){
        e.preventDefault();
        alert("Enter valid name");
        name.focus()
        return false
    }

     // if user did not enter any value it shows an alert please enter email
    if (emailvalue == "") {
        e.preventDefault();
        alert("Please  enter  email")
        email.focus()
        return false
    }

    
     // if user did not enter any value it shows an alert please enter password
    if (passwordvalue == "") {
        e.preventDefault();
        alert("Please  enter passwod")
        password.focus()
        return false
    }

    // if user enter password length less than five it shows an error Password should atleast 5 characters
    if (passwordvalue.length <5) {
        e.preventDefault();
        alert("Password should atleast 5 characters")
        password.focus()
        return false
    }
    

    // if user entered all details correct and after submiting it show an alert data saved succesfully
    alert("data saved succesfully")
});

