let partyBtn = document.getElementById('party-btn');

const getParty =(e)=>{
    fetch('https://polityco.herokuapp.com/api/v1/parties/')
        .then((res)=>{return res.json()})
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

partyBtn.addEventListener('click', getParty)