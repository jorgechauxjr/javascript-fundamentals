const urls = [
    "https://api-colombia.com/api/v1/Department",
    "https://api-colombia.com/api/v1/TouristicAttraction",
    "https://api-colombia.com/api/v1/Region",
];

async function fetchNewData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}