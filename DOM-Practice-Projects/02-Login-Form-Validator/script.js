let form=document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let error1=document.querySelector(".email-error");
let error2=document.querySelector(".password-error");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let eans=emailRegex.test(email.value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let pans=passwordRegex.test(password.value);
    if(!eans){
        error1.textContent="check your email";
    }
    else {
    error1.textContent = "";
    }
    if(!pans){
        error2.textContent="check your password";
    }
    else {
    error2.textContent = "";
    }

    if(eans && pans){
        email.value="";
        password.value="";
        alert("Form submitted successfully!");
    }
});