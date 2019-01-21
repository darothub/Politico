let signIn = document.getElementById("signin-link")
let signUp = document.getElementById("signup-link")

const openLoginPage=()=>{
    signIn.addEventListener('click', (e)=>{
        let signInBackground = document.getElementById("signin-form-background");
    
        if(signInBackground.style.display === "block"){
            signInBackground.style.display = "none"
            return false
        }
        signInBackground.style.display = "block";
        e.preventDefault()
    });
    
}
const openSignupPage=()=>{
    signUp.addEventListener('click', (e)=>{
        let signInBackground = document.getElementById("signin-form-background");
    
        if(signInBackground.style.display === "block"){
            signInBackground.style.display = "none"
            return false
        }
        signInBackground.style.display = "block";
        e.preventDefault()
    });
}