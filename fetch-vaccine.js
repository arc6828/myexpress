//Fetch or AXOIS
const fetch = require('node-fetch');

async function main(){
    //FETCH
    let response = await fetch('http://expressck.herokuapp.com/vaccine/fetch');
    let data = await response.json();
    console.log(data);   
}

main();



