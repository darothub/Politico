let signUpBtn = document.querySelector('#enter');


const postData=(e)=>{
    e.preventDefault();

    let fname = document.querySelector("#firstName").value;
    let lname = document.querySelector("#lastName").value;
    let oname = document.querySelector("#otherName").value;
    let eAddress = document.querySelector("#eAddress").value;
    let password = document.querySelector("#password").value;
    let userId = document.querySelector("#user-id").value;
    let phone = document.querySelector("#phone").value;

    fetch(`https://polityco.herokuapp.com/auth/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            fname,
            lname,
            oname,
            eAddress,
            password,
            phone,
            userId
        })
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
}

signUpBtn.addEventListener("click", postData);