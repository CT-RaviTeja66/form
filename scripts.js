let data = {
    Username : "",
    Email : "",
    Password: "",
    Confirm_Password : ""
};

let myFormEl = document.getElementById("myForm");
let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let spl = ['!','@','#','$','%','^','&','*'];
let num = ['0','1','2','3','4','5','6','7','8','9'];


let usernameEl = document.getElementById("username");
let userMsgEl = document.getElementById("userMsg");
usernameEl.addEventListener("blur",function(event){
    let userResult = event.target.value;
    if((userResult.length >= 3) && (userResult.length <= 25)){
        userMsgEl.textContent = "";
        usernameEl.style.borderColor = "green";
    }
    else{
        userMsgEl.textContent = "Username must be between 3 and 25 characters";
        usernameEl.style.borderColor = "red";
    }
    data.Username = event.target.value;

}); 

let emailEl = document.getElementById("email");
let emailMsgEl = document.getElementById("emailMsg");
emailEl.addEventListener("blur",function(event){
    let emailResult = event.target.value;
    if(emailResult.includes("@gmail.com") || (emailResult.includes("@outlook.com"))){
        emailMsgEl.textContent = "";
        emailEl.style.borderColor = "green";
    }
    else{
        emailMsgEl.textContent = "Must be an valid Email address";
        emailEl.style.borderColor = "red";
    }
    data.Email = event.target.value;
});


let password_inputEl = document.getElementById("password_input");
let passMsgEl = document.getElementById("passMsg");
password_inputEl.addEventListener("blur",function(event){
    let passResult = event.target.value;
    
    let lower_count = 0;
    let upper_count = 0;
    let spl_count = 0;
    let num_count=0;

    for(let value in alp){
    if(passResult.includes(alp[value])){
        lower_count = lower_count +1;
    }
    else if(passResult.includes(alph[value])){
        upper_count = upper_count + 1;
    }
    }

    for(let value in spl){
    if(passResult.includes(spl[value])){
        spl_count = spl_count +1;
    }
    }

    for(let value in num){
    if(passResult.includes(num[value])){
        num_count = num_count + 1;
    }
    }

    if((passResult.length >= 8) && ((lower_count >= 1) && (upper_count >=1) && (spl_count>=1) && (num_count>=1))){
        passMsgEl.textContent = "";
        password_inputEl.style.borderColor = "green";
    }
    else{
        passMsgEl.textContent = "Password must has at least 8 characters that include at least 1 lowecase character. 1 uppercase character. 1 number. and 1special character on(!@#$%^&*)";
        password_inputEl.style.borderColor = "red";
    }
    data.Password = event.target.value;
});


let confirmpasswordEl =document.getElementById("confirmpassword");
let conPassMsgEl =document.getElementById("conPassMsg");
confirmpasswordEl.addEventListener("blur",function(event){
    let conPassResult = event.target.value;
    if(data.Password === conPassResult){
        conPassMsgEl.textContent = "";
        confirmpasswordEl.style.borderColor = "green";
    }
    else{
        conPassMsgEl.textContent = "Please Enter the password again";
        confirmpasswordEl.style.borderColor = "red";
    }
    data.Confirm_Password = event.target.value;
});





let eyeclickcount = 0;
let eye_iconEl = document.getElementById("eye_icon");
eye_iconEl.addEventListener("click",function(){
    if(eyeclickcount%2 ==0){
        let show_eyeEl = document.getElementById("show_eye");
        show_eyeEl.setAttribute('class',"fa fa-eye-slash icon");
        password_inputEl.setAttribute('type','text')
    }
    else{
        let show_eyeEl =document.getElementById("show_eye");
        show_eyeEl.setAttribute('class',"fa fa-eye icon");
        password_inputEl.setAttribute('type','password')
    }
    eyeclickcount = eyeclickcount + 1;
});


myFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(data);
});




