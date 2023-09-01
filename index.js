let signUpLink = document.getElementById("signUpLink");
let loginForm = document.getElementById("loginform");
let signupForm = document.getElementById("signupform");
let pass = document.getElementById("password")
let passReg = document.getElementById("passwordReg")
let showPass = document.getElementById("show_pass")
let showPassReg = document.getElementById("show_pass_reg")
let conPass = document.getElementById("con_password")

function showMoreDet(){
    loginForm.style.display = "none";
    signupForm.style.display = "block";
}
function showMoreDetee(){
    signupForm.style.display = "none";
    loginForm.style.display = "block";
}

showPass.addEventListener('click', ()=>{
    if(showPass.checked == true){
        pass.type = 'text'
        conPass.type = 'text'
    }else{
        pass.type = 'password'
        conPass.type = 'password'
    }
})

showPassReg.addEventListener('click', ()=>{
    if(showPassReg.checked == true){
        passReg.type = 'text'
        conPass.type = 'text'
    }else{
        passReg.type = 'password'
        conPass.type = 'password'
    }
})