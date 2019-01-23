const showSignUp=()=>{
    let form2 = document.getElementById("form-wrap2")
    let form1 = document.getElementById("form-wrap1")
    let signinTitle = document.getElementById("signin-title")
    if(form2.style.display === "block" ){
        signinTitle.textContent = "Sign in here"
        form2.style.display = "none"
        form1.style.display = "block"
        return false
    }
    signinTitle.textContent = "Sign up here"
    form2.style.display = "block";
    form1.style.display = "none";
    return false
}

const showSignin=()=>{
    let form2 = document.getElementById("form-wrap2")
    let form1 = document.getElementById("form-wrap1")
    let signinTitle = document.getElementById("signin-title")
    if(form1.style.display === "block"){
        signinTitle.textContent = "Sign up here"
        form1.style.display = "none"
        form2.style.display = "block"
        return false
    }
    signinTitle.textContent = "Sign in here"
    form1.style.display = "block";
    form2.style.display = "none"
    return false
}