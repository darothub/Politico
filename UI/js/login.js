const showSignUp=()=>{
    let form2 = document.getElementById("form-wrap2")
    let form1 = document.getElementById("form-wrap1")
    let signinBtn = document.getElementById("signin-btn")
    let signupBtn = document.getElementById("signup-btn")
    let signinTitle = document.getElementById("signin-title")
    if(form2.style.display === "block" ){
        signinTitle.textContent = "Sign in here"
        form2.style.display = "none"
        form1.style.display = "block"
        signinBtn.style.display = "none"
        signupBtn.style.display = "block"

    }
    else{
        signinTitle.textContent = "Sign up here"
        form2.style.display = "block";
        form1.style.display = "none";
        signinBtn.style.display = "block"
        signupBtn.style.display = "none"
        
    }
    return false
}

const showSignIn=()=>{
    let form2 = document.getElementById("form-wrap2")
    let form1 = document.getElementById("form-wrap1")
    let signupBtn = document.getElementById("signup-btn")
    let signinBtn = document.getElementById("signin-btn")
    let signinTitle = document.getElementById("signin-title")
    if(form1.style.display === "block"){
        signinTitle.textContent = "Sign up here"
        form1.style.display = "none"
        form2.style.display = "block"
        signinBtn.style.display = "block"
        signupBtn.style.display = "none"
    
    }
    else{
        signinTitle.textContent = "Sign in here"
        form1.style.display = "block";
        form2.style.display = "none";
        signinBtn.style.display = "none"
        signupBtn.style.display = "block"
    }
    
    return false
}