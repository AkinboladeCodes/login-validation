const userName = document.getElementById("username").value;
const userPassword = document.getElementById("password").value;
const loginBtn = document.getElementById("loginBtn");
const error1 = document.getElementById("errormessage1");
const error2 =  document.getElementById("errormessage2");





function CheckUser(){

    if (userName <= 7 || userName >= 20) {
         error1.innerHTML = " User Name must be 8 letters and not above 20 letters";

    }else{
        error1.innerHTML = "";
    }
}

function PasswordCheck(){
    if(userPassword <= 7 || userPassword >= 30){
        error2.innerHTML = " User password must be 8 letters and not above 20 letters";
    }
    else{
        error2.innerHTML = "";
    }

}



