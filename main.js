var dataCity = document.getElementById('dataCity');
dataCity.addEventListener('change', function () {
    getUserData(dataCity.value)
})
async function getUserData(city){

    let url= `https://api.pray.zone/v2/times/today.json?city=${city}`;
    let apply= await fetch(url);
    let objectJson= await apply.json();
    document.getElementById("Imsak").innerText=objectJson.results.datetime[0].times.Imsak
    document.getElementById("subh").innerText=objectJson.results.datetime[0].times.Fajr
    document.getElementById("zohr").innerText=objectJson.results.datetime[0].times.Dhuhr
    document.getElementById("Asr").innerText=objectJson.results.datetime[0].times.Asr
    document.getElementById("Maghrib").innerText=objectJson.results.datetime[0].times.Maghrib
    document.getElementById("Isha").innerText=objectJson.results.datetime[0].times.Isha

}