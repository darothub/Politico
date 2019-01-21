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
});