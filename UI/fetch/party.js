// let partyBtn = document.getElementById('party-btn');

// const getParty =(e)=>{
//     e.preventDefault();
//     fetch('https://polityco.herokuapp.com/api/v1/parties/')
//         .then((res)=>{return res.json()})
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }

// partyBtn.addEventListener("click", getParty);



let signUpBtn = document.querySelector('#enter');


const postData = (e) => {
    e.preventDefault();

    // let partyname = document.querySelector("#partyname").value;
    // let partyId = document.querySelector("#party-id").value;
    // let hqAddress = document.querySelector("#addrss").value;

    let formData = document.querySelector("#formData");


    fetch(`https://polityco.herokuapp.com/api/v1/parties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new FormData(formData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
}

signUpBtn.addEventListener("click", postData);

