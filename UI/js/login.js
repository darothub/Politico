<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 5e6bfb0b2279ddad8ca35632be05c3bd0926b124

let signIn = document.getElementById("signin-link")
let signUp = document.getElementById("signup-link")

signIn.addEventListener('click', (e)=>{
    let signInBackground = document.getElementById("signin-form-background");

    if(signInBackground.style.display === "block"){
        signInBackground.style.display = "none"
        return false
    }
    signInBackground.style.display = "block";
    e.preventDefault()
});

signUp.addEventListener('click', (e)=>{
    let signInBackground = document.getElementById("signin-form-background");

    if(signInBackground.style.display === "block"){
        signInBackground.style.display = "none"
        return false
    }
    signInBackground.style.display = "block";
    e.preventDefault()
<<<<<<< HEAD
});
>>>>>>> sigin-page
=======
});
>>>>>>> 5e6bfb0b2279ddad8ca35632be05c3bd0926b124
