/*

// manejo de promesas usando .then

function fetchData() {
    fetch("https://api-colombia.com//api/v1/Department")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

fetchData();

*/

// manejo de promesas asincronas usando async - await
async function fetchData () {
    try {
        let response = await fetch("https://api-colombia.com//api/v1/Department");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

